//global varbles
var canvas;
var direction = 10;
var angle = 5;
var enemyX = 50;
var enemyY = 50;
var enemySize = 50;
var userSize = 100
var lose = false;
var enemyPic;
var game_over;

function preload(){
	enemyPic = loadImage("Library/Images/furby.png");
	game_over = loadImage("Library/Images/Game_Over.png");
}

//code in setup runs once
function setup(){ 
	canvas = createCanvas(windowWidth, windowHeight);
	background(205, 120, 180); 
	image(enemyPic, enemyX, enemyY, enemySize, enemySize)
	rect(0, userSize, 1, userSize);
	imageMode(CENTER);
}

// runs over and over
// updares every rame
function draw(){

	//checks if the game is runing, and if so draws the player and the ball
	if(lose != true){
		background(205, 120, 180);
		if( (mouseY > userSize) || (mouseY< windowHeight-userSize) ){ 
			rect(5, mouseY, 1, userSize);
		}else if((mouseY > userSize)){
			rect(5, (userSize), 1, userSize);
		}else if ((mouseY < windowHeight-userSize)) {
			rect(5, (windowHeight-userSize), 1, userSize);
		}else{
			print(Error)
		}
		enemyX += direction;
		enemyY += angle;
		image(enemyPic, enemyX, enemyY, enemySize, enemySize)
		rect(windowWidth-5, enemyY, 2, userSize);
	}else{
		image(game_over, (windowWidth/2), (windowHeight/2), windowWidth, windowHeight);
	}

	//checks if the ball is still in bounds and if it needs to bounce
	if( (enemyX <= enemySize/2) && ( (enemyY >= mouseY-userSize) && (enemyY <= mouseY+userSize) ) ){ //checks if it hits user (if it does not  use (ellipseY <= 50) then it alwas runs)
		direction = 10;
	}else if(enemyX > windowWidth-enemySize){ //check if it hits other wall
		direction = -10;
	}else if( (enemyY > windowHeight-enemySize)||(enemyY < 0+enemySize) ){ //check if it hits the top or botom
		angle *= -1;
	}else if( (enemyX < 0) || (enemyY < 0) ){ //checks if user missed
		print("YOU LOSE");
		lose = true
	}
}

function windowResize(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(225, 120, 180);
}