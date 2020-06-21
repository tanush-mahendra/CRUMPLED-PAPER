//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
  var box,box2,box3;
  var paper,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
//}	


function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
      
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
     
   box=new Box(500,700);
   box2=new Box(540,650);
   box3=new Box(580,700);
   paper=new Paper();
   ground=new Ground();

	Engine.run(engine);

	
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}
function keypressed(){
	if(keycode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})		 
	}
}

