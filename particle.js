function Particle(x,y){
  this.pos = createVector(x, y);
  this.vel = createVector();//p5.Vector.random2D();
  this.acc = createVector();
  this.prev = createVector(x,y);

  this.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  this.show = function(){
      stroke(255, 15);
      strokeWeight(1);
      line(this.pos.x, this.pos.y, this.prev.x,this.prev.y);
      this.prev.x = this.pos.x;
      this.prev.y = this.pos.y;
  }

  this.attracted = function(target){
    var force = p5.Vector.sub(target, this.pos);
    var dsq = force.magSq();
    dsq = constrain(dsq,5,500);
    var G = 30;
    var str = G / dsq;
    force.setMag(str);
    this.acc.add(force);
  }
}
