var fixedRect,movingRect, edges;

function setup() {
  createCanvas(800,400);
  movingRect1= createSprite(200, 200, 50, 80);
  movingRect1.shapeColor ="blue";

  movingRect2= createSprite(500, 200, 80, 30);
  movingRect2.shapeColor = "blue";

  movingRect1.velocityX = 4
  movingRect2.velocityX = -4

  edges = createEdgeSprites();
}

function draw() {
  background("red");  


if(movingRect1.x-movingRect2.x<movingRect2.width/2+movingRect1.width/2 &&
  movingRect2.x-movingRect1.x<movingRect2.width/2+movingRect1.width/2 
 )
  {
  movingRect1.velocityX=-4;
  movingRect2.velocityX=4;
}

movingRect1.bounceOff(edges);
movingRect2.bounceOff(edges);

drawSprites();
}
