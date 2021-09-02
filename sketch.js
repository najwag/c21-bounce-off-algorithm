var fixedRect, movingRect;

var r1, r2, r3, r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  r1 = createSprite(200, 100, 50,80);
  r1.shapeColor = "red"
  r1.velocityY = 5
  r2 = createSprite(200,800, 80, 30)
  r2.shapeColor = "red"
  r2.velocityY = -5

  r3 = createSprite(800, 100, 50,80);
  r3.shapeColor = "blue"
  r3.velocityY = 5
  r4 = createSprite(800,800, 80, 30)
  r4.shapeColor = "blue"
  r4.velocityY = -5
}

function draw() {
  background(0,0,0);  

  bounce(r1, r2);

  bounce(r3, r4)
  drawSprites();
}

function bounce(o1,o2) {
  if (o1.x - o1.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2) {
  o1.velocityX = o1.velocityX * (-1);
  o2.velocityX = o2.velocityX * (-1);
}
if (o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y < o2.height/2 + o1.height/2){
  o1.velocityY = o1.velocityY * (-1);
  o2.velocityY = o2.velocityY * (-1);
}
}