
var fixedRect , movingRect

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(50, 200, 20, 32);
fixedRect.shapeColor = "green"
fixedRect.velocityX = 2

movingRect = createSprite(1100,200,50,30)
movingRect.shapeColor = "green"
movingRect.velocityX = -2




}

function draw() {
  background(255,255,255); 
  
  bounceOff(movingRect, fixedRect)

//movingRect.x = mouseX
//movingRect.y = mouseY


  
  
    
  

  drawSprites();


}

function bounceOff(object1 , object2){
  if(object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.x - object2.x < object2.width/2 + object1.width/2){
      object2.velocityX = object2.velocityX * -1
      object1.velocityX = object1.velocityX * -1
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){

        object2.velocityY = object2.velocityY * -1
        object1.velocityY = object1.velocityY * -1
      }
}
