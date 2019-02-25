//global varbles
var canvas;
//var random = Math.random();
var direction = 10;
var enemyList = [];
var shotList = [];
var enemySize = 50;
var userSize = 100;
var newEnemys = 2;
var type = "1"
var lose = false;
var enemyPic;
var game_over;
var player;
var intervalID = setInterval(fps, 1000);

///////////////////////////////////////////////////////////////////////////////////

function preload(){
	enemyPic = loadImage("Library/Images/furby.png");
	shotPic =  loadImage("Library/Images/furby.png");
	player = loadImage("Library/Images/furby.png");
	game_over = loadImage("Library/Images/Game_Over.png");
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(205, 120, 180); 
	image(player, (mouseX - (mouseX % enemySize)), 0, enemySize, enemySize);
	addEnemy();
	addEnemy();
}

function draw(){
	//checks if the game is runing
	if(lose != true){
		game();
	}else{
		image(game_over, (windowWidth/2), (windowHeight/2), windowWidth, windowHeight)
	}
}

function keyPressed() {
	if (keyCode === 13) {
		addShot();
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
		this.y = random( (windowHeight-200) ,windowHeight);
		this.y -= this.y % enemySize;
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

//Class Shot is a class that stores the ememys x and y position
class Shot{
	constructor(){
		this.x = mouseX;
		this.x -= this.x % enemySize;
		this.y = 0;
		this.pic=shotPic;
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

function addShot(){
	if(type == "1"){
		shotList.push(new Shot());
	}else if(Shot.getType() == "2"){
		for(var i =0; i < enemyList.length; i++){
			if( ((enemyList[i].getx()) == mouseX) || ((enemyList[i].getx()) == mouseY) ){}
		}
	}else{
		Shot.type = "1";
	}
}

function collitionTest(){
	for (var i = 0; i < shotList.length; i++){
		for (var x = 0; x < enemyList.length; x++){
			if( (shotList[i].getx() == enemyList[x].getx()) && (shotList[i].gety() == enemyList[x].gety()) ){
				print("i:", i);
				print("i length:", shotList.length);
				shotList.splice(i,1);
				enemyList.splice(x,1);
				if(i>0){
					i--;
				}else if (i < 0){
					i = 0;
				}
				if(x>0){
					x--;
				}else if (x < 0){
					x = 0;
				}
				print("i:", i);
				print("i length:", shotList.length);
			}
		}
	}
}

function move(array, speed){
	for (var i = array.length - 1; i >= 0; i--) {
		array[i].y += speed;
	}
}

function fps(){
	addEnemy();
	move(enemyList, -enemySize);
	move(shotList, enemySize);
}

function game(){
	background(205, 120, 180);
	image(player, (mouseX - (mouseX % enemySize)), 0, enemySize, enemySize);
	collitionTest();
	for (var i = 0; i < shotList.length; i++){
		//display all of the shots in the array on the screen
		shotList[i].show();
	}
	for (var i = 0; i < enemyList.length; i++){
		//display all of the enemies in the array on the screen
		enemyList[i].show();
	}
}  