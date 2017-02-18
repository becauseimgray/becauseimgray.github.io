var k = 5; //9 / 7;
var count = 0.005;
var c = 2;

function setup() {
	createCanvas(800,600);
}

function draw() {
	k += count;
	background(255, 200, 255);
	translate(width / 2, height/2);

	beginShape();
	stroke(0,0,100, 8);
	fill(0, 0, 215, 85);
	strokeWeight(1);

	for(var a = 0; a < TWO_PI * c; a += 0.02){
		var r = 200 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		vertex(x,y);
	}
	endShape(CLOSE);
	fill(255,255,0,250);
	noStroke()
	ellipse(0,0,100,100);
}
