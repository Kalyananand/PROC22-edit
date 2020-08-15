
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(340,340,400,50);
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(0);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    if(mousePressed) {
        box = new box(100,0,50,50);
    }
    // Use a for loop to show all the boxes
    drawSprites();
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the first option