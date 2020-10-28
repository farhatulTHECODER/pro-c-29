const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stand1;
var Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10,Box11,Box12,Box13,Box14,Box15;
var ball,slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1 = new Ground(450,600,600,20);
	
	//level two
	Box8 = new Box(330,235,30,40);
	Box9 = new Box(360,235,30,40);
	Box10 = new Box(390,235,30,40);
	Box11 = new Box(420,235,30,40);
	Box12 = new Box(450,235,30,40);
//level three
Box13 = new Box(360,195,30,40);
Box14 = new Box(390,195,30,40);
Box15 = new Box(420,195,30,40);
//top
Box16 = new Box(390,155,30,40);

ball = Bodies.circle(100,100,20);
World.add(world,ball)

    slingshot = new slingShot(ball,{x:100, y:200});
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  stand1.display();
  
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  Box13.display();
  Box14.display();
  Box15.display();
  Box16.display();

  
  slingshot.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}
function keyPressed(){
	if(keyCode===32){
		Ball.attach();
	}
}
function mouseDragged(){
    Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingshot.fly();
}
