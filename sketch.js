
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof();

	bob1 = new Bob(320,150);
	bob2 = new Bob(360,150);
	bob3 = new Bob(400,150);
	bob4 = new Bob(440,150);
	bob5 = new Bob(480,150);

	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	if(keyWentDown("LEFT_ARROW")){
		Body.applyForce(bob1.body,bob1.body.position,{x:-40, y:-40})
	}
	if(keyWentDown("RIGHT_ARROW")){
		Body.applyForce(bob5.body,bob5.body.position,{x:40, y:-40})
	}
	
}



