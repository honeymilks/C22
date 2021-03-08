var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  box1=createSprite(300,200,50,50);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,box1)) {
    movingRect.shapeColor="peachpuff";
    box1.shapeColor="peachpuff";
  }
 else {
  movingRect.shapeColor="pink";
  box1.shapeColor="pink";
  }

  drawSprites();
}

