var V;
var M;
var RU=null;
var J;
var K;
var MD;
var CC;
var GO;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	J= loadSound("jump.wav"); 
	K= loadSound("kick.wav");
	MD= loadSound("mariodie.wav");
	CC= loadSound("coin.wav");
	GO= loadSound("gameover.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('CC');
	V= createCapture(VIDEO);
	V.size(150, 200);
	V.parent('CH');
	M=ml5.poseNet(V, ML);
	M.on('pose', GR);
}
function draw() {
	game()
}
function ML(){
	console.log("d");
}
function GR(R, E){
	RU=R;
	console.log(RU);
}







