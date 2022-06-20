let game = null;
// game aanmaken
function setup(){
    createCanvas(1200, 550);

    background(0);

    game = new Climmber();

   
}
// kame tekenen
function draw(){
    game.Update();
}
