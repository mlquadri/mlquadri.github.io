//global varables to be used on this file only
var canvas;

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

//screen Images;
var preScene_image;
var Scene1_image;
var Scene2_0_image;
var Scene2_1_image;
var Scene3_0_image;
var sceneDeath_image;
//inputs
var nameInput;

//global varables to be used on other files to
var statAttack = -99;
var statDefence = -99;
var statCharm = -99;
var statStelth = -99;
var startingStatCap = 20;
var incentive = 2;
var weapon = 0;
var armor = 0;
var shoes = 0;
var charm = 0;
var gold = 0;
var price = 0;
var diceButtonClicked = 0;
var diceList = [0, 0, 0, 0];
var nameEntered = false;
var difficultyMultiplyer = 1;

function preload(){
    preScene_image;
    Scene1_image;
    Scene2_0_image;
    Scene2_1_image;
    Scene3_0_image;
    sceneDeath_image;
}

function setup() {
    background(120);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    setUpTags();
    gold = randrange(0, 10);
    print("player started with "+gold+" gold")
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
    screenBody.html("Enter your name and stats. As the game progresses you will be able to succeed in action depending on how high your related stat (or stats) are. Also you will be able to rase your stats in game by gaining equipment. Finaly be warned that by failing encounters you can lower your chance at the next one");
    
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
    randomStats.html("Random Stats");
    randomStats.mousePressed(preScene_randomStatsAct);
    defInput.changed(preScene_defInputAct);
    attackInput.changed(preScene_attackInputAct);
    charmInput.changed(preScene_charmInputAct);
    sneakInput.changed(preScene_sneakInputAct);

    //start game
    option1.html("Start game");
    option1.mousePressed(preScene_option1Act);
}

function Scene1(){
    preScene_hide()
    background(0);
    price = 2;
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
    screenBody.html("He will sale you a sword, cottorn armor, or boots for "+price+" gold");
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
    title.html(nameInput.value() + ", Bear");
    createElement('br');
    screenBody.html("You see a bear");
    createElement('br');
    option1.html("Fight (Attack)");
    createElement('br');
    option2.html("Fight (Deffend)");
    createElement('br');
    option3.html("Try to talk past him (Charm)");
    createElement('br');
    option4.html("Try to sneak past him(Sneak)");
    createElement('br');

    //user input
    option1.mousePressed(Scene3_0_option1Act);
    option2.mousePressed(Scene3_0_option2Act);
    option3.mousePressed(sceneDeath);
    option4.mousePressed(Scene3_0_option4Act);
}

function Scene4_0(){
    background(0);
    title.html(nameInput.value() + ", You see a bunch of knights fighting");
    createElement('br');
    screenBody.html("red = pay money but bad men. blue = good but poor. ");
    createElement('br');
    option1.html("Fight the Red (Attack)");
    createElement('br');
    option2.html("Fight the blue (Deffend)");
    createElement('br');
    option3.html("Try to negociat peace (Charm)");
    createElement('br');
    option4.html("Try to sneak past them(Sneak)");
    createElement('br');

    //user input
    option1.mousePressed(Scene4_0_option1Act);
    option2.mousePressed(Scene4_0_option2Act);
    option3.mousePressed(Scene4_0_option3Act);
    option4.mousePressed(Scene4_0_option4Act);
}
function Scene5_0(){
    background(0);
    sceneDeath_hide();
    title.html("The End");
    createElement('br');
    screenBody.html("You win, you die of old age with "+(gold*10)+" piece of gold while being hated by many");
}
function Scene5_1(){
    background(0);
    sceneDeath_hide();
    title.html("The End");
    createElement('br');
    screenBody.html("You win, you die of old age with "+(gold*10)+" piece of gold while being loved by many");
}
function Scene5_2(){
    background(0);
    sceneDeath_hide();
    title.html("The End");
    createElement('br');
    screenBody.html("You win, you die of old age with "+(gold*10)+" piece of gold while being loved by all");
}
function Scene5_3(){
    background(0);
    sceneDeath_hide();
    title.html("The End");
    createElement('br');
    screenBody.html("You win, you die of old age with "+(gold*10)+" piece of gold while being unknown by all");
}

function sceneDeath(){
    sceneDeath_hide();
    background(0);
    title.html(nameInput.value() + ", you have died");
    createElement('br');
    screenBody.html("A traveling bard found you with: "+gold+" peace of gold");
    restart.html("Try Agian");
    restart.show();
}