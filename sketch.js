const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rectangle1, triangle1;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    rectangle1 = new Rectangle(525,320,70,70);
    rectangle2 = new Rectangle(670,320,70,70);
    triangle1 = new Triangle(600, 100);
    triangle2 = new Triangle(520, 100);

    rectangle3 = new Rectangle(600,240,70,70);
    rectangle4 = new Rectangle(600,240,70,70);
    triangle3 = new Triangle(670, 100);
    triangle4 = new Triangle(600, 100);
    
    rectangle5 = new Rectangle(525,320,70,70);
    rectangle6 = new Rectangle(670,320,70,70);
    triangle5 = new Triangle(600, 100);
    triangle6 = new Triangle(600, 90);

    rectangle7 = new Rectangle(525,320,70,70);
    rectangle8 = new Rectangle(670,320,70,70);
    
    square1 = new Square(670,90);
    square2 = new Square(520,90);

    rectangle9 = new Rectangle(525,320,70,70);
    rectangle10 = new Rectangle(600,350,70,70);
    rectangle11 = new Rectangle(670,150,70,70);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    rectangle1.display();
    rectangle2.display();
    ground.display();
    triangle1.display();
    triangle2.display();
    
    rectangle3.display();
    rectangle4.display();
    triangle3.display();
    triangle4.display();
    
    rectangle5.display();
    rectangle6.display();
    triangle5.display();
    triangle6.display();

    rectangle7.display();
    rectangle8.display();

    square1.display();
    square2.display();

    rectangle9.display();
    rectangle10.display();
    rectangle11.display();
}
