
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1;
var box2;
var box3;
var ball;


function setup() {
	createCanvas(1000, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:1,
		density:1.2
	 }

	ball=Matter.Bodies.circle(200,300,20,ball_options);
	World.add(world,ball);
	 
	//Create the Bodies Here.
	
	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);



	box1= new Box(800,380,160,20);
	box2= new Box(710,310,20,160);
	box3= new Box(880,310,20,160);

	

  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background("pink");
  rect(ground.position.x,ground.position.y, 2000,20);


ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
	

  box1.display();
  box2.display();
  box3.display();
  
   



  drawSprites();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-85});
	}
}


