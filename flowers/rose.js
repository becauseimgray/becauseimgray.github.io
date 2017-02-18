var k = 9 / 7;
var count = 0.0001;
var c = 8;

function setup() {
	createCanvas(800,600);
}

function draw() {
  k+= count;
	background(255, 220, 200);
	translate(width / 2, height/2);
	beginShape();
	stroke(255,0,0);
	fill(255, 0, 0, 85);
	strokeWeight(1);
	for(var a = 0; a < TWO_PI * c; a += 0.02){
		var r = 200 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		vertex(x,y);
	}
	endShape(CLOSE);
}
