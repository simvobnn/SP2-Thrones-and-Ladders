let tiles = [];
let players = [];

function setup() {
    let gameBoard = document.getElementById("gameboard");
    let canvas = createCanvas(600, 500);
    canvas.parent(gameBoard);
    let resolution = 100;
    let cols = width / resolution;
    let rows = height / resolution;

    let x = 0;
    let y = (rows - 1) * resolution;
    let dir = 1;
    for (let i = 0; i < cols * rows; i++) {
        let tile = new Tile (x, y, resolution, i, i + 1);
        tiles.push(tile);
        x = x + (resolution * dir);
        if (x >= width || x <= -resolution) {
            dir *= -1;
            x += resolution * dir;
            y -= resolution;
            
        }
    }
    for (let i = 0; i < 5; i++) {
        let index = floor(random(cols, tiles.length - 1));
        tiles[index].trap = -1 * floor(random(index % cols, index - 1));    
    }
    playerOne = new Player(rollState);
    playerTwo = new Player(waitState);
    players.push(playerOne, playerTwo);    
}
function draw() {
    for (let tile of tiles) {
        tile.renderTiles();
    } 
    for (let tile of tiles) {
        tile.renderTraps();
    } 
    
    window.initTurn = () => {
        for (let player of players) {
            switch (player.state) {
                case 0:
                    player.rollDie();
                    player.state = moveState;                    
                case 1:
                    player.moveToken();
                    if (player.ifTrap()) {
                        player.state = trapState;
                        console.log("ITS A TRAAAAP!");
                    } else {
                        player.state = waitState;
                        break;
                    }                    
                case 2:
                    player.trapMove();
                    player.state = waitState;
                    break;
                case 3:
                    player.state = rollState;
            }
            if (player.spot >= tiles.length - 1) {
                player.winner();
            }
        }
    }    
    playerOne.renderPlayers();
    playerTwo.renderPlayers();
}