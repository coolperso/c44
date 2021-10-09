var bg,iss
var craft1,craft2
var craft3,craft4,space 

function preload(){
  bg=loadAnimation("spacebg.jpg")
  iss=loadAnimation("iss.png")
  craft1=loadAnimation("spacecraft1.png")
  craft2=loadAnimation("spacecraft2.png")
  craft3=loadAnimation("spacecraft3.png")
  craft4=loadAnimation("spacecraft4.png")
}






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss=createSprite(800,400)
  space.addImage("craft",iss)
}

function draw() {
  background(255,255,255); 
  if(KeyDown("Up_ARROW")){
    space.addImage("moving",craft1)
    velocity.y=100
    if(keyDown("DOWN_ARROW")) {
      space.addAnimation("up",craft2)
      space.velocityX=0
      
    }
    if(keyDown("LEFT_ARROW")) {
      space.addAnimation("down",craft3)
      astronaut.y=350;
      astronaut.velocityX=-6
      
    }
    if(keyDown("RIGHT_ARROW")) {
      space.addAnimation("right",craft4)
      astronaut.changeAnimation("bath")
      astronaut.velocityX=-6
    
    }

  } 
  drawSprites();
}