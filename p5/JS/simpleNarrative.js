//global varables
var canvas;
var userName;

//screen text
var title;
var firstOptions;
var secondOptions;

//input
var slider;
var greeting;
var nameInput;
var growingPlanetBool = false;

function preload(){
    
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    background(120);
    beginning();
}

function draw() {
  background(0)
    if(growingPlanetBool){
        growingPlanet();
    }

}

function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
}

////////////////////////////////////
///////scene start functions////////
////////////////////////////////////

function beginning(){
  background(0);
  greeting = createP("Please type your name and press enter");
  nameInput = createInput();
  //check and see if the user pressed enter if so trigers start story
  nameInput.changed(startStory);
}

function startStory(){
  background(0);
  greeting.hide();
  nameInput.hide();
  userName = createElement('h1', nameInput.value());
  title = createElement("h1", "Get home before the sun sets")
  //create link("Where to link", "Link text")
  firstOptions
  createElement("br")
  secondOptions = createA("#","Walk towards the sun");
  //checks to see if the user has pressed the stated objects is so trigers stated function
  firstOptions.mousePressed(walkHome);
  secondOptions.mousePressed(walkToSun);
}

function walkHome(){
  background(0);
  secondOptions.hide();
  userName.hide();
  title=createElement("h1", "You got Home")
  firstOptions=createA("#", "Start Over");
  firstOptions.mousePressed(beginning);
}

function walkToSun(){
  background(0);
  userName.hide();
  title.html(nameInput.value() + ", you walk towards the sun and see a planet")
  firstOptions=createA("#", "Continue walking the sun");
  createElement("br")
  secondOptions=createA("#", "Walk to the planet");
  firstOptions.mousePressed(closerToSun);
  secondOptions.mousePressed(planetElements);
}

function closerToSun(){
  background(0);
  firstOptions.hide();
  secondOptions.hide();
  title.html(nameInput.value() + ", you reach the edge of the sun")
}

function planetElements(){
  firstOptions.hide();
  secondOptions.hide();
  slider = createSlider(0, 255, 0);
  createP(nameInput.value() + " control the size of the planet");
  growingPlanetBool = true;
}

/////////////////////////////////////
//////////animated function//////////
/////////////////////////////////////
function growingPlanet(){
  background(120);
  //slider requires at least two arguments
  //createSlider(min value, max value, starting value)
  print(slider.value());
  fill(slider.value());
  ellipse(400, 400, slider.value(), slider.value());
}