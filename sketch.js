
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperOb,groundOb,dustbinOb;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperOb =new paper(200,450,40);
	groundOb=new ground(width/2,670,width,20);
	dustbinOb=new dustbin(1200,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperOb.display();
  groundOb.display();
  dustbinOb. display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperOb.body,paperOb.body.position,{x:85,y:-85});
  
	}
}



