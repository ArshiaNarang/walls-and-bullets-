var bullet,wall,thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,20,20);
  bullet.velocityX = speed;

  wall=createSprite(1200,200,thickness,height/2);
  //wall.shapeColor="brown";

  var thickness=random(22,83);

}
 

function draw() {
  background(0,0,0);  

  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

 
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
  
    
      if(damage<10)
      {
      wall.shapeColor="green";
      }

  else 
  {
    wall.shapeColor="red";
  }
}

    drawSprites();
  
  }
  

  

  
