//PROJECT-29 : Tower Siege
//Aim: to create Tower Siege Game using Constrained Bodies
//Project demonstrates throwing rock(hexagon) at a group of stacked objects and crash them on ground


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 

//variables
var engine, world;
var ground; 

var ground, stand1, stand2;
var block1,block2,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24;
var polygon, polygonImage, slingshot;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

    ground  = new Ground(width/2,height-30,width,20);
 
    //first stack of boxes
    stand1 = new Ground(500,height-100, 300, 20);
    block1 = new Box(400,680,50,40)
    block2 = new Box(450,680,50,40)
    block3 = new Box(490,680,50,40)
    block4 = new Box(540,680,50,40)
    block5 = new Box(590,680,50,40)

    block6 = new Box(425,650,50,40)
    block7 = new Box(475,650,50,40)
    block8 = new Box(525,650,50,40)
    block9 = new Box(575,650,50,40)
    
    block10 = new Box(450,600,50,40)
    block11 = new Box(500,600,50,40)
    block12 = new Box(550,600,50,40)

    //second stack of boxes
    stand2 = new Ground(650, height - 400, 340, 20)
    block13 = new Box(580,380,50,40)
    block14= new Box(620,380,50,40)
    block15= new Box(660,380,50,40)
    block16= new Box(700,380,50,40)
    block17= new Box(740,380,50,40)

    block18 = new Box(600,350,50,40)
    block19 = new Box(650,350,50,40)
    block20 = new Box(700,350,50,40)
    block21 = new Box(735,350,50,40)
    
    block22 = new Box(635,325,50,40)
    block23 = new Box(665,325,50,40)
    block24 = new Box(700,325,50,40)

    //POLYGON HOLDER WITH SLING
    var options={
        density : 0.2
    }
    polygon = Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    //sling to connect the polygon to a point
    slingshot = new SlingShot(this.polygon, {x:150, y:550})
}

function draw(){
    background("white");
    textSize(25)
    fill("black")
    textFont('Georgia');
    text("Tower Siege",500,100)
    text("Drag the Hexagonal stone and release(launch) it towards blocks",100,160);
    text("Press SPACE to try again",100,210)
    Engine.update(engine);

    ground.display()

    stand1.display()
    fill("pink")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()

    fill("lightblue")
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    
    fill("yellow")
    block10.display()
    block11.display()
    block12.display()


    stand2.display()
    fill("pink")
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()

    fill("lightblue")
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    
    fill("yellow")
    block22.display()
    block23.display()
    block24.display()

    imageMode(CENTER)
    image(polygonImage,polygon.position.x, polygon.position.y, 60,60)

    slingshot.display()
}

//when "SPACE" is pressed the Hexagon is attached back to the origional position
function keyPressed(){
	if(keyCode === 32){
        Matter.Body.setPosition(polygon, {x:150,y:550})
		slingshot.attach(polygon)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
