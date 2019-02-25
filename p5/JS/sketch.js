var canvas;
//code in setup runs once
function setup(){ 
	canvas = createCanvas(windowWidth, windowHeight);
	background(205, 120, 180); 
	rectMode(CENTER);  
	for (var i = 0; i < 20; i++) {
		ellipse(200, 400, i*10, i*10);
	}
}

// runs over and over
// updares every rame
function draw(){
	strokeWeight(10);
	fill(66, 244, 140);
	line(20, 60, 700, 500);
	stroke(255, 0, 0)
	ellipse(200, 400, mouseX, mouseY);
	fill(0, 20, 140 50);
	rect(width/2, height/2, 100, 200);
	noStroke();
	triangle(600, 100, 700, 50, 750, 150);
	//print(mouseX);
}
function windowResize(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(225, 120, 180);
}