
$('#flame').show;

$(document).ready(function(){

var light = true;

console.log ('THE LIGHT IS ON: ' + light);

$('#button').click(function(){
  switchbutton();
});

function switchbutton() {

  if (light == true) {
    $('#button').css('-webkit-transform', 'scaleY(-1)');
    $('#darkness').hide();
    $('#glow').hide();
    light = false;
  }

  else {
    $('#button').css('-webkit-transform', 'scaleY(1)');
    $('#darkness').show();
    $('#glow').show();
    light = true;
  }

  console.log ('THE LIGHT IS ON: ' + light);
}



$('#onion').click(function(){
  $('#onion').css('-webkit-transform', 'rotate(200deg) translate(360px, 0px)');
  console.log ('THE ONION IS ROLLING');
});

$('.clemetine.one').click(function(){
  $('.clemetine.one').css('-webkit-animation-play-state', 'running');
  console.log ('THE CLEMETINE 1 IS BOUNCING');
});

$('.clemetine.two').click(function(){
  $('.clemetine.two').css('-webkit-animation-play-state', 'running');
  console.log ('THE CLEMETINE 2 IS BOUNCING');
});

$('.clemetine.three').click(function(){
  $('.clemetine.three').css('-webkit-animation-play-state', 'running');
  console.log ('THE CLEMETINE 3 IS BOUNCING');
});

$('#egg').click(function(){
  $('#egg').css('-webkit-animation-play-state', 'running');
  shaking = true;
  console.log ('THE EGG IS SHAKING');
});

$('#flame').click(function(){
  $('#wax').css('height', '0%');
  $('#wick').css('-webkit-transform', 'translate(0%)');
  $('#darkness').css('-webkit-transform', 'translate(0px,100px)');
  $('#flame').delay(9500).fadeOut(500);
  setTimeout(function(){
    $('#darkness').css('background-image', 'radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 30%');
  }, 10500);
  console.log ('THE CANDLE IS BURNING');
});










});
