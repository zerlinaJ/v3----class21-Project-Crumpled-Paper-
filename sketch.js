
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;



	ground = new Ground(600,580,1200,20);
	paper = new Paper(450,550,25);
	dustbin = new Dustbin(900,550);

	
	 // Engine.run(engine);
}

function draw() {
	Engine.update(engine);
 
  background(0);
  
  ground.display();
  paper.display();
  dustbin.display();

}


function keyPressed(){

	if(keyDown("space")){
		
		Body.applyForce(paper.body,paper.body.position,{x:92,y:-92});
	  }
}