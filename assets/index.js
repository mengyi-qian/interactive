

$(document).ready(function(){

$('#stars').hide();

$('.close').click(function(){
  $('#container').hide();
  $('#stars').show();
  $('body').css('background-color','SlateGrey')
});

$('#switch').click(function(){
  $('#container').show();
  $('#stars').hide();
  $('body').css('background-color','WhiteSmoke')
});


});
