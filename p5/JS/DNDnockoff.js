//global varables to be used on this file only
var canvas;
var gold

//screen varables
var title;
var screenBody;
var userName = "";
var dice;
var option1;
var option2;
var option3;
var option4;
var restart;
var trueList;
//sideImage;

//input
var slider;
var nameInput;

//global varables to be used on other files to
var statAttack;
var statDefence;
var statCharm;
var statStelth;
var incentive = 2;
var weapon;
var armor;
var shoes;
var charm;
var nameEntered = true;
var diceButtonClicked = 4;
//var trueList[];

function preload(){
    
}

function setup() {
    background(120);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    setUpTags();
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
    background(0);

    //title and text
    title.html("Enter the stuffies");
    screenBody.html("Enter your carecter name and stats. As the game progresses you will be able to succeed in action depending on how high your related stat (or stats) are. Also you will be able to rase your stats in game by gaining equipment. Finaly be warned that by failing encounters you can lower your chance at the next one");
    
    //name input
    nameInput.style("placeholder", "Enter Name");
    nameInput.changed(preScene_nameAct);

    //stat dice
    dice.html("Role Dice");
    dice.mousePressed(preScene_diceAct);

    //stat inputs
    defInput.style("placeholder", "Enter defence stat");
    attackInput.style("placeholder", "Enter attack stat");
    charmInput.style("placeholder", "Enter charm stat");
    sneakInput.style("placeholder", "Enter sneak stat");
    defInput.changed(preScene_defInputAct);
    attackInput.changed(preScene_attackInputAct);
    charmInput.changed(preScene_charmInputAct);
    sneakInput.changed(preScene_sneakInputAct);

    //start game
    option1.html("Start game");
    option1.mousePressed(Scene1);
}

function Scene1(){
    preScene_hide()
    background(0);
    title.html(userName + ", Title");
    createElement('br');
    screenBody.html("2 paths");
    createElement('br');
    option1.html("Go right")
    createElement('br');
    option2.html("Go left");
    createElement('br');

    //user input
    option1.mousePressed(Scene2_1);
    option2.mousePressed(Scene2_0);
}

function Scene2_0(){
    background(0);
    title.html(userName + ", You see a merchant");
    createElement('br');
    screenBody.html("He will sale you a sword, cottorn armor, or boots.");
    createElement('br');
    option1.html("Sword (Attack)");
    createElement('br');
    option2.html("Cotton armor (deffend)");
    createElement('br');
    option3.html("boots (steath)");
    createElement('br');
    option4.html("try to sweet talk beter prices (charm)");
    createElement('br');

    //user input
    option1.mousePressed(Scene2_0_option1Act);
    option2.mousePressed(Scene2_0_option2Act);
    option3.mousePressed(Scene2_0_option3Act);
    option4.mousePressed(Scene2_0_option4Act);
}

function Scene2_1(){
    background(0);
    title.html(nameInput.value() + ", Title");
    createElement('br');
    screenBody.html("You see a bandit");
    createElement('br');
    option1.html("Fight (Attack)");
    createElement('br');
    option2.html("Fight (deffend)");
    createElement('br');
    option3.html("Try to talk past him (charm)");
    createElement('br');
    option4.html("Try to sneak back and go the other way(sneak)");
    createElement('br');

    //user input
    option1.mousePressed(Scene2_1_option1Act);
    option2.mousePressed(Scene2_1_option2Act);
    option3.mousePressed(Scene2_1_option3Act);
    option4.mousePressed(Scene2_1_option4Act);
}
function Scene3_0(){
    background(0);
    title.html(nameInput.value() + ", Title");
    createElement('br');
    screenBody.html("You see a bear");
    createElement('br');
    option1.html("Fight (Attack)");
    createElement('br');
    option2.html("Fight (deffend)");
    createElement('br');
    option3.html("Try to talk past him (charm)");
    createElement('br');
    option4.html("Try to sneak back and go the other way(sneak)");
    createElement('br');

    //user input
    option1.mousePressed(Scene3_0_option1Act);
    option2.mousePressed(Scene3_0_option2Act);
    option3.mousePressed(Scene3_0_option3Act);
}

function sceneDeath(){
    sceneDeath_hide();
    background(0);
    title.html(nameInput.value() + ", you have died");
    createElement('br');
    screenBody.html("A traveling bard found you with: "+gold+" peace of gold");
    restart.html("Try Agian");
}