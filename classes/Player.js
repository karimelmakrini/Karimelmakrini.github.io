class Player extends GameObject{
   
    #jumpsLeft = 1;
   #jumped = false;
  
   constructor(x, y, size) {
       super(x, y, size, size, true);
       }
        // player aanmaken
        Update() {
           circle(0, 0, this.width);
  
           if (this.#jumpsLeft < 1) {
           }
           else if (this.velocity.x < 0.1 && this.velocity.x > -0.1) {  
           }
           else if (this.velocity.x != 0) {
           }
           if (this.animation)
               this.animation.draw(0, 0);
  
           this.setSpeed(this.velocity.y + GRAVITY, 90);
           this.#jumped = false;
  
          // knoppen instellen
           if (keyIsDown(LEFT_ARROW) === true) {
               this.addSpeed(5, 180);
           }
           if (keyIsDown(RIGHT_ARROW) === true) {
               this.addSpeed(5, 0);
           }
              
           if (keyWentDown(UP_ARROW) === true && this.#jumpsLeft > 0) {
               this.setSpeed(12, -90);
               this.#jumpsLeft--;
               this.#jumped = true;
           }
          
          
       }
        // blijven staan op vloer
       Collide(other) {
           if (other instanceof TileFloor) {
               if (this.#jumped === false) {
                   this.#jumpsLeft = 1;
               }
  
               if (this.velocity.y > 0) {
                   this.velocity.y = 0;
               }
           }
       }
        // doden door Fire
       Overlap(otherObjects){
           if(otherObjects instanceof Fire){
               this.remove;
               alert("Game Over")
           }
       }
      
   }