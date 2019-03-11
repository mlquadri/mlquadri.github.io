//global varables to be used on this file only
var canvas;

//screen text
var title;
var screenBody;
var userName;
var dice;
var option1;
var option2;
var option3;
var option4;
var trueList;

//input
var slider;
var nameInput;

//global varables to be used on other files to
var statAttack;
var statDefence;
var statCharm;
var statStelth;
var incentive;
var weapon;
var armor;
var shoes;
var charm;

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
    //trueList[];
    background(0);

    //title and text
    title = createP("Enter the stuffies");
    screenBody = createP("Enter your carecter name and stats. As the game progresses you will be able to succeed in action depending on how high your related stat (or stats) are. Also you will be able to rase your stats in game by gaining equipment. Finaly be warned that by failing encounters you can lower your chance at the next one");
    
    //name input
    nameInput = createInput(); 
    nameInput.style("placeholder", "Enter Name");
    //nameInput.changed(); //
    function nameAct(){ nameEntered = true; userName = nameInput.value() }
    createElement('br');

    //stat dice
    dice = createA("#","Role Dice");
    //dice.mousePressed(rollDice());
    createElement('br');

    //stat inputs
    defInput = createInput();
    defInput.style("placeholder", "Enter defence stat");
    createElement('br');
    attackInput = createInput();
    attackInput.style("placeholder", "Enter attack stat");
    createElement('br');
    charmInput = createInput();
    charmInput.style("placeholder", "Enter charm stat");
    createElement('br');
    sneakInput = createInput();
    sneakInput.style("placeholder", "Enter sneak stat");
    createElement('br');
    //defInput.changed(statDefence = defInput.value());
    //attackInput.changed(statAttack = attackInput.value());
    //charmInput.changed(statCrisma = charmInput.value());
    //sneakInput.changed(statStelth = sneakInput.value());

    option1 = createA("#","Start");
    option1.mousePressed(firstScene);
}

function Scene1(){
    background(0);
    title.html(userName + ", Title")
    screenBody.html("2 paths");
    option1 = createA("#", "Go right");
    option2 = createA("#", "Go left");

    //user input
    option1.mousePressed(Scene2_1());
    option2.mousePressed(Scene2_0());
}

function Scene2_0(){
    background(0);
    title.html(userName + ", Title")
    screenBody.html("Body Text");
    option1 = createA("#", "option1 (Attack)");
    option2 = createA("#", "option2 (deffend)");
    option3 = createA("#", "option3 (charm)");
    option4 = createA("#", "option4 (sneak)");

    //user input
    option1.mousePressed(option1Act());
    option2.mousePressed(option2Act());
    option3.mousePressed(option3Act());
    option4.mousePressed(option4Act());
    function option1Act(){if(checkStats(statAttack, 1)){Scene3_0}}
    function option2Act(){if(checkStats(statDefence, 1)){Scene3_0}}
    function option3Act(){if(checkStats(statCharm, 1)){Scene3_0}}
    function option4Act(){if(checkStats(statStelth, 1)){Scene3_0}}
}

function Scene2_1(){
    background(0);
    title.html(nameInput.value() + ", Title")
    screenBody.html("You see a bandit");
    option1 = createA("#", "Fight (Attack)");
    option2 = createA("#", "Fight (deffend)");
    option3 = createA("#", "Try to talk past him (charm)");
    option4 = createA("#", "Try to sneak back and go the other way(sneak)");

    //user input
    option1.mousePressed(option1Act());
    option2.mousePressed(option2Act());
    option3.mousePressed(option3Act());
    option4.mousePressed(option4Act());
    function option1Act(){if(checkStats(statAttack, 1)){Scene3_0}else{sceneDeath}}
    function option2Act(){if(checkStats(statDefence, 1)){incentive+=1; Scene2_1}else{incentive-=1; Scene2_1}}
    function option3Act(){if(checkStats(statCharm, 1)){Scene3_0}else{sceneDeath}}
    function option4Act(){if(checkStats(statStelth, 1)){Scene1_0}else{Scene2_1}}
}
function Scene3_0(){
    background(0);
    title.html(nameInput.value() + ", Title")
    screenBody.html("You see a bandit");
    option1 = createA("#", "Fight (Attack)");
    option2 = createA("#", "Fight (deffend)");
    option3 = createA("#", "Try to talk past him (charm)");
    option4 = createA("#", "Try to sneak back and go the other way(sneak)");

    //user input
    option1.mousePressed(option1Act());
    option2.mousePressed(option2Act());
    option3.mousePressed(option3Act());
    option4.mousePressed(option4Act());
    function option1Act(){if(checkStats(statAttack, 1)){Scene3_0}else{sceneDeath}}
    function option2Act(){if(checkStats(statDefence, 1)){incentive+=1; Scene2_1}else{incentive-=1; Scene2_1}}
    function option3Act(){if(checkStats(statCharm, 1)){Scene3_0}else{sceneDeath}}
    function option4Act(){if(checkStats(statStelth, 1)){Scene1_0}else{Scene2_1}}
}

function sceneDeath(){
    background(0);
}