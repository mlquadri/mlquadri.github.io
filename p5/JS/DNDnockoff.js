//global varables
var canvas;
var userName;

//screen text
var title;
var option1;
var option2;
var option3;
var option4;

//input
var slider;
var statAttack;
var statDefence;
var statCrisma;
var statStelth;
var nameInput;

function preload(){
    
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    background(120);
    preScene();
}

function draw() {
    background(0)
}

function windowResized(){
    canvas = createCanvas(windowWidth, windowHeight);
}

////////////////////////////////////
///////scene functions////////
////////////////////////////////////

function preScene(){
    var nameEntered = false;
    var buttonClicked = 0;
    background(0);
    title.html("enter the stuffies")
    nameInput = createInput();
    nameInput.changed(nameEntered = true);
    //button = role dice
    //button cliked (print random.randomInt() buttonClicked++)
    defInput = createInput();
    attackInput = createInput();
    chrismaInput = createInput();
    sneakInput = createInput();
    defInput.changed(statDefence = defInput.value());
    attackInput.changed(statAttack = attackInput.value());
    chrismaInput.changed(statCrisma = chrismaInput.value());
    sneakInput.changed(statStelth = sneakInput.value());
    option1 = createA("#","start");
    option1.mousePressed(firstScene);
}

function firstScene(){
    background(0);
    title.html(nameInput.value() + ", hi")
    nameInput
    //button = role dice
    //butone cliked (print random.randomInt() buttonClicked++)
    defInput = createInput();
    attackInput = createInput();
    chrismaInput = createInput();
    sneakInput = createInput();
    defInput.changed(statDefence = defInput.value());
    attackInput.changed(statAttack = attackInput.value());
    chrismaInput.changed(statCrisma = chrismaInput.value());
    sneakInput.changed(statStelth = sneakInput.value());
    option1 = createA("#","start");
    option1.mousePressed(firstScene);
}