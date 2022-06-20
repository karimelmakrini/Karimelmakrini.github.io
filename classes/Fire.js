class Fire extends GameObject {
    #player = null;
    #playerPos = null;

    constructor(x, y, size, player) {
        super(x, y, size, size);

        this.#player = player;
        this.#playerPos = this.#player.position.copy();
    }

    get Player() {
        return this.#player;
    }

    set PlayerPos(value) {
        this.#playerPos = value;
    }
    // fire aanmaken
    Update() {
        fill(100, 0, 0);

        rect(0, 0, 5000, 300);

        this.PlayerPos = this.Player.position.copy();

        let direction = p5.Vector.sub(this.#playerPos, this.position);

        let dirAngle = direction.heading();
     
        let dirAngleDegrees = degrees(dirAngle);
     
        this.setSpeed(2, dirAngleDegrees);

    }
}