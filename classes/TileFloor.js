// tegel op de vloer
class TileFloor extends Tile {
    constructor(x, y, width, height) {
        super(x, y, width, height );
    }

    Update() {
        rect(0, 0, this.width, this.height);  
    }
}