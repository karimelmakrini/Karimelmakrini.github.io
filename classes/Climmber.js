const GRAVITY = 0.4;
     
class Climmber extends Game {
      #player = null;
      #Fire = [];
      #tiles = [];
 
 
      constructor() {
          super();

         // de vloer word gemaakt
          let floors = [];
          for (let i = 0; i < 20; ++i) {
              floors.push(new TileFloor(i * 70, 600, 70, 35));
              floors.push(new TileFloor(700, 100, 70, 35));
              floors.push(new TileFloor(1000, 200, 70, 35));
              floors.push(new TileFloor(400, 300, 70, 35));
              floors.push(new TileFloor(600, 450, 70, 35));
              floors.push(new TileFloor(1200, 500, 70, 35));
              floors.push(new TileFloor(400, 600, 70, 35));
          }

        // de muren worden gemaakt
          let walls = [];
          for (let i = 0; i < 2; ++i) {
              walls.push(new TileWall(700, 365 - (i * 70), 70));
          }

          this.#tiles = floors.concat(walls);
         
         // de speler en vuur worden gespawned
          this.#player = new Player(400, 500, 20, 20);
          this.#Fire.push(new Fire(0, 800, 20, this.#player));
      }
 
      get Player() {
      return this.#player;
      }
 
      Update() {
          translate(-this.Player.position.x + 210, 0);
          super.Update();
      }
     
  }
