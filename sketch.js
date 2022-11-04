var bllt;
var wall;
var thickness;
var speed,weight;



function setup()
 {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,312);
  weight=random(30,52);

  bllt = createSprite(50,200, 54, 5);
  bllt.velocityX=speed;
  bllt.shapeColor=color(255);
  
  wall = createSprite(1200,200,thickness,height/2);
 

  
}

function draw() 
{
  background("lightblue"); 
  wall.shapeColor="black" 
  

  if(bllt.isTouching(wall))
  {
    bllt.shapeColor="red"
    bllt.shapeColor="blue"

    bllt.velocityX=0
   
  }

  
  drawSprites();
}