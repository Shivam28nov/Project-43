var bg,bg2,form,system,code,security,s,ss;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  smiley = loadImage("simley.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("#010203")
    textSize(40);
    text("TREASURE UNLOCKED",240, 220);
  }

  drawSprites()
}