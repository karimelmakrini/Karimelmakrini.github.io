//tegel aanmaken
class Tile extends GameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h, true);
        this.setCollider("rectangle");
    }
}