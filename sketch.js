
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  bobObject1 = new Bob(500,200,20,20);
  bobObject2 =new Bob(300,100,20,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(bobObject1.body.position.x);
  console.log(bobObject1.body.position.y);
  console.log(bobObject2.body.angle);
  
  
  
 
}



