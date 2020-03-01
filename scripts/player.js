const rollState = 0;
const moveState = 1;
const trapState = 2;
const waitState = 3;

class Player {
    constructor(state) {   
        this.spot = -1;
        this.next = -1;
        this.roll = -1;
        this.state = state;
        let idArray = JSON.parse(localStorage.getItem("selectedCards"));
        if (this.state === 0) {
            this.playerId = idArray[0];
        } else {
            this.playerId = idArray[1];
        }
    }
    rollDie() {
        this.roll = floor(random(1, 7));
        this.next = this.spot + this.roll;
    } 
    moveToken() {
        this.spot = this.next;
    }
    ifTrap() {
        let tile = tiles[this.spot];
        return (tile && tile.trap !== 0);
    }
    trapMove() {
         let tile = tiles[this.spot];
         this.spot += tile.trap;
    }
    renderPlayers() {
        let current = tiles[this.spot];
        if (!current) return;
        fill(255);
        let center = current.getCenter();
        ellipse(center[0], center[1], 32);    
    }
    winner() {
        window.location.href = "winner.html";
    }   
}
