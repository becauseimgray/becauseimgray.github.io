(function(window, document, undefined){
window.onload = init;

  function init(){
    var invaders_link = document.getElementById('invaders');
    var block_link = document.getElementById('blockbreaker');
    var pong_link = document.getElementById('pong');
    var body = document.body;
    //var background = document.getElementById('background');

    var invaders_image = "url('images/invaders_screenie.png')";
    var breaker_image = "url('images/blockbreaker_screenie.png')";
    var pong_image = "url('images/pongl2d_screenie.png')";

    invaders_link.onmouseenter = function(){

        body.style.backgroundImage = invaders_image;
    };

    block_link.onmouseenter = function()   {

        body.style.backgroundImage = breaker_image;
    };

    pong_link.onmouseenter = function()    {

        body.style.backgroundImage = pong_image;
    };
    invaders_link.onmouseleave = function() {
      background.style.opacity = 0.5;
    }
  }

  var fadeEffect=function(){
  	return{
  		init:function(id, flag, target){
  			this.elem = document.getElementById(id);
  			clearInterval(this.elem.si);
  			this.target = target ? target : flag ? 100 : 0;
  			this.flag = flag || -1;
  			this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
  			this.elem.si = setInterval(function(){fadeEffect.tween()}, 20);
  		},
  		tween:function(){
  			if(this.alpha == this.target){
  				clearInterval(this.elem.si);
  			}else{
  				var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
  				this.elem.style.opacity = value / 100;
  				this.elem.style.filter = 'alpha(opacity=' + value + ')';
  				this.alpha = value
  			}
  		}
  	}
  }();






})(window, document, undefined);
