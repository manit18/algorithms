var fixedRect, movingRect, object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(50,50,30,20);
  object1.shapeColor="green";
  object1.velocityY=3;
  object2=createSprite(50,350,20,30);
  object2.shapeColor="green";
  object2.velocityY=-3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, object2) ){

    movingRect.shapeColor = "red";
    object2.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    object2.shapeColor = "green";
  }
bounceOff(object1,object2);
  
  drawSprites();
}

