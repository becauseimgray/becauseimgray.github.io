(function(window, document, undefined){
  // fade out
function fadeOut(el){
  el.style.opacity = 0.2;

  (function fade() {
    if ((el.style.opacity -= .03) < 0) { //.1
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .01) > 0.2)) { //0.1
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}


window.onload = init;

  function init(){
    var invaders_link = document.getElementById('invaders');
    var block_link = document.getElementById('blockbreaker');
    var pong_link = document.getElementById('pong');


    var invadersimg = document.getElementById('invadersimg');
    var blockbreakerimg = document.getElementById('blockbreakerimg');
    var pongimg = document.getElementById('pongimg');

    var body = document.body;
    //var background = document.getElementById('background');

    var invaders_image = "url('images/invaders_screenie.png')";
    var breaker_image = "url('images/blockbreaker_screenie.png')";
    var pong_image = "url('images/pongl2d_screenie.png')";

    invaders_link.onmouseenter = function()    {fadeIn(invadersimg);};
    block_link.onmouseenter    = function()    {fadeIn(blockbreakerimg);};
    pong_link.onmouseenter     = function()    {fadeIn(pongimg);};


    invaders_link.onmouseleave = function()    {fadeOut(invadersimg);};
    block_link.onmouseleave    = function()    {fadeOut(blockbreakerimg);};
    pong_link.onmouseleave     = function()    {fadeOut(pongimg);};

    document.getElementById('repos').onmouseleave = function() {
      fadeOut(invadersimg);
      fadeOut(blockbreakerimg);
      fadeOut(pongimg);
    }

  };


})(window, document, undefined);
