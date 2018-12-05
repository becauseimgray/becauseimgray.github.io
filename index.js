
var canvas;
var bg;
var x = 0;
var y = 0;


//main setup of canvas
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  bg = loadImage("bg.jpg");
  noStroke();
}

//resizes the canvas on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//main draw function
function draw() {
  	background(bg);	
  //background(63,68,68);
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);

  fill(255);
  stroke(255);
}
