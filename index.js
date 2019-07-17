
var canvas;
var x = 0;
var y = 0;


//main setup of canvas
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  noStroke();
//background(216,191,216);
}

//resizes the canvas on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//main draw function
function draw() {	
  //background(63,68,68);

/*if (!mouseIsPressed){
fill(0);
stroke(0);
strokeWeight(5)
	line(pmouseX,pmouseY,mouseX,mouseY);
}else{
background(216,191,216);
}
*/
  fill(255);
  stroke(255);
}
