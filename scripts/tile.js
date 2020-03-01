class Tile {

    constructor(x, y, wh, index, next) {
        this.x = x;
        this.y = y;
        this.wh = wh;
        this.index = index;
        this.next = next;
        this.trap = 0;
        if (this.index % 2 == 0) {
            this.color = 50;
        } else {
            this.color = 150;
        }
    }

    getCenter() {
        let cx = this.x + this.wh / 2;
        let cy = this.y + this.wh / 2;
        return [cx, cy];
    }

    renderTiles() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.wh, this.wh);
        
    }
    renderTraps() {
        if (this.trap != 0) {
            let center = this.getCenter();
            let nxtCenter = tiles[this.index + this.trap].getCenter();
            strokeWeight(4);
            if (this.trap < 0) {
                stroke(255);
            }
            line(center[0], center[1], nxtCenter[0], nxtCenter[1]);
        }
    }
}