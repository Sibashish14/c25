
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumpledpaper;

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumpledpaper=new crumpledPaper();

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  crumpledpaper.display();
  dustbinObj.display();
  imageMode(CENTER);
  image(dustbinImage,1200,550,250,250);
  
  if(keyDown("up")){
	  Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position,{x:130,y:-145});
  }
}

