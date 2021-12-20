
var modem;
var sliderVolume;
var sliderRate;
var sliderPan;

var button;
// function preload(){
	
	var canvas;
// 
 
// }

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index', '-1');
	canvas.position(0,0);
	button = createButton("play");
	button.mousePressed(togglePlaying);
	//callback...will run when the song is loaded
	modem = loadSound("ModemSound.mp3", playAudio);
	//sliderVolume = createSlider(0, 1, 0, 0.01);
	//sliderRate = createSlider(0, 3, 1, 0.01);
	sliderPan = createSlider(-1, 1, 0, 0.01);
	
	modem.setVolume(0.5);
}

function togglePlaying(){
	
	if(!modem.isPlaying()){
		modem.play();
		button.html("pause");
	}else{
		modem.pause();
		button.html("play");
	}

}
function playAudio(){
	//modem.play();
}


function draw(){
	background(200);
	ellipse(20, 20, 10, 10);
	//pan back and forth between speakers/channels
	modem.pan(sliderPan.value());

	//adjust the rate of playback
	//modem.rate(sliderRate.value());
}