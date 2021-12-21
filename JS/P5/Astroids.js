//global varbles
var canvas;
//var random = Math.random();
var enemyList = [];
var enemySize = 50;
var newEnemys = 2;
var type = "1"
var lives = 2;
var enemyPic;
var player;
var backgroundPic;
var game_over;
var intervalID = setInterval(fps, 1000);

///////////////////////////////////////////////////////////////////////////////////

function preload(){
	enemyPic = loadImage("../../Media/Images/P5/asteroid.png");
	player = loadImage("../../Media/Images/P5/SpaceShip.png");
	game_over = loadImage("../../Media/Images/P5/Game_Over.png");
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(225, 225, 225); 
	image(player, (mouseX - (mouseX % enemySize)), windowHeight-enemySize, enemySize, enemySize);
	addEnemy();
}

function draw(){
	//checks if the game is runing
	if(lives >= 0){
		game();
	}else{
		background(0, 0, 0);
		image(game_over, (windowWidth/2), (windowHeight/2), windowWidth, windowHeight)
	}
}

function windowResize(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(225, 120, 180);
}

////////////////////////////////////////////////////////////////////////////////////////

//Class ememy is a class that stores the ememys x and y position
class Enemy{
	//these x and y coordinates are unique to each object created
	constructor(){
		this.x = random(windowWidth);
		this.x -= this.x % enemySize;
		this.y = 0;
		this.pic=enemyPic;
	}
	getx(){
		return this.x;
	}
	gety(){
		return this.y;
	}
	addx(add){
		this.x += add;
	} 
	addy(add){
		this.y += add; 
	}
	//prints the object to the screen
	show(){
		image(this.pic, this.x, this.y, enemySize, enemySize);
	}
}

function addEnemy(){
  	for (var i = 0; i < 1; i++){
		//if( random(0,2) == 1){
			enemyList.push(new Enemy());
		//}
	}
}

function collitionTest(){
	for (var i = 0; i < enemyList.length; i++){
		//var distance = Math.pow( (Math.pow( mouseX−(enemyList[i].getx()), 2)+Math.pow( mouseY−(enemyList[i].gety()), 2)) , (1/2));
		if( (mouseX >= enemyList[i].getx() && mouseX <= (enemyList[i].getx()+enemySize)) && 
			(mouseY >= enemyList[i].gety() && mouseY <= (enemyList[i].gety()+enemySize)) ){
			lives--;
			enemyList.splice(i,1);
		}
	}
}

function checkEnemys(){
	for (var i = 0; i < enemyList.length; i++){
		if(enemyList[i].gety() > windowHeight){
			enemyList.splice(i,1);
		}
	}
}

function showlives(x,y){
	for (var i = 0; i < lives; i++) {
		image(player, x+(i*enemySize), y, enemySize, enemySize);
	}
}

function move(array, speed){
	for (var i = array.length - 1; i >= 0; i--) {
		array[i].y += speed;
	}
}

function fps(){
	addEnemy();
	move(enemyList, enemySize);
}

function game(){
	background(0, 0, 0);
	checkEnemys();
	showlives(0,0);
	collitionTest();
	image(player, (mouseX - (mouseX % enemySize)), (mouseY - (mouseY % enemySize)), enemySize, enemySize);
	for (var i = 0; i < enemyList.length; i++){
		//display all of the enemies in the array on the screen
		enemyList[i].show();
	}
}  