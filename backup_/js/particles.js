var attractors = [];
var particles = [];
var canvas;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1')
	for(var i = 0; i < 50; i++){
			particles.push(new Particle(random(width), random(height)));
	}

	for(var i = 0; i < 10; i++){
		attractors.push(createVector(random(width),random(height)));
	}
	background(20);
}

function draw() {
	stroke(255);
	strokeWeight(4);
for(var i = 0; i < particles.length; i++){
	var particle = particles[i];
	for(var j = 0; j < attractors.length; j++){
		//point(attractors[j].x, attractors[j].y);
		particle.attracted(attractors[j]);
	}
		particle.show();
		particle.update();
	}
}
