const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, lineV1, lineV2, lineH;

var trash, trashPic, trashBin;

function preload(){
	trashPic = loadImage("sprites/trash_bin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(200,50,25);

	ground = new Ground(400,680,800,20)

	lineV1 = new Line(600,600,10,120)
	lineV2 = new Line(700,600,10,120)
	lineH = new Line(650,665,100,10)

	trashBin = createSprite(650,600);
	trashBin.addImage(trashPic);
	trashBin.scale = 0.25

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
  
	ball.display(75,75);
	ground.display("black");

	lineV1.display("white");
	lineV2.display("white");
	lineH.display("white");

	drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-100})

	}
}

