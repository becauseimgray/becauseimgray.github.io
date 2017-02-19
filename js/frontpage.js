var canvas;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index",-1);
  t = 0;
}

function draw() {
  var r = 80 * noise(t+10);
  var g = 80 * noise(t+15);
  var b = 80 * noise(t+20);
  background(r,g,b,255);

  //t = t + 0.005;
  t = t + mouseX / 100000;
}
