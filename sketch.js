const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;





function preload() {
    bg = loadImage("galaxy.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    rect1 = new Box(330,250);
    rect2 = new Box(360,250);
    rect3 = new Box(390,250);
    rect4 = new Box(420,250);
    rect5 = new Box(450,250);
    rect6 = new Box(480,250);
    rect7 = new Box(510,250);

    rect8 = new Box(360,210);
    rect9 = new Box(390,210);
    rect10 = new Box(420,210);
    rect11 = new Box(450,210);
    rect12 = new Box(480,210);

    rect13 = new Box(390,170);
    rect14 = new Box(420,170);
    rect15 = new Box(450,170);

    rect16 = new Box(420,130);

    rect17 = new Box(730,250);
    rect18 = new Box(760,250);
    rect19 = new Box(790,250);
    rect20 = new Box(820,250);
    rect21 = new Box(850,250);
    rect22 = new Box(880,250);
    rect23 = new Box(910,250);

    rect24 = new Box(760,210);
    rect25 = new Box(790,210);
    rect26 = new Box(820,210);
    rect27 = new Box(850,210);
    rect28 = new Box(880,210);

    rect29 = new Box(790,170);
    rect30 = new Box(820,170);
    rect31= new Box(850,170);

    rect32 = new Box(820,130);

    ground = new Ground(420,270,230,10);
    ground1 = new Ground(820,270,230,10);
    ground3 = new Ground(width/2,400,width,10);

    poly = new Polygon(100,120);
    slingshot = new SlingShot(poly.body,{x:100, y:100});
	
}

    

function draw(){
    
background(bg);
    
rect1.display();
rect2.display();
rect3.display();
rect4.display();
rect5.display();
rect6.display();
rect7.display();

rect8.display(); 
rect9.display();
rect10.display();
rect11.display();
rect12.display();

rect13.display();
rect14.display();
rect15.display();

rect16.display();

rect32.display();
rect31.display();
rect30.display();
rect29.display();
rect28.display();
rect27.display();
rect26.display();

rect25.display(); 
rect24.display();
rect23.display();
rect22.display();
rect21.display();

rect20.display();
rect19.display();
rect18.display();

rect17.display();
ground.display();
ground1.display();
ground3.display();

poly.display();
slingshot.display();

    Engine.update(engine);
   
}

function mouseDragged(){
	//Use Matter.Body.setPosition to set the position of the stone
	Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    
        slingshot.fly();
    
    }

    function keyPressed(){
        if(keyCode === 32){
        slingshot.attach(poly.body);
        }
    }
   








