

$(document).ready(function(){

$("img").mouseenter(function(){
  $(this).addClass('hover');
});
$("img").mouseout(function(){
  $(this).removeClass('hover');
});


$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() < 200){
         $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(25deg)');
      }
      else if ($(this).scrollTop() < 400){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(45deg)');
      }
      else if ($(this).scrollTop() < 600){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(65deg)');
      }
      else if ($(this).scrollTop() < 800){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(90deg)');
      }
      else if ($(this).scrollTop() < 1000){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(115deg)');
      }
      else if ($(this).scrollTop() < 1200){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(135deg)');
      }
      else if ($(this).scrollTop() < 1400){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(160deg)');
      }
      else if ($(this).scrollTop() < 1600){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(180deg)');
      }
      else if ($(this).scrollTop() < 1800){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(215deg)');
      }
      else if ($(this).scrollTop() < 2000){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(245deg)');
      }
      else if ($(this).scrollTop() < 2200){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(260deg)');
      }
      else if ($(this).scrollTop() < 2400){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(290deg)');
      }
      else if ($(this).scrollTop() < 2600){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(310deg)');
      }
      else if ($(this).scrollTop() < 2800){
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(330deg)');
      }
      else{
        $("img").css('-webkit-filter','grayscale(100%) sepia(100%) hue-rotate(355deg)');
      }
   });
});



$('#g').click(function(){
  $(this).hide();
});

$('#f').click(function(){
  $(this).hide();
});

$('#e').click(function(){
  $(this).hide();
});

$('#d').click(function(){
  $(this).hide();
});

$('#c').click(function(){
  $(this).hide();
});

$('#b').click(function(){
  $(this).hide();
});

$('#a').click(function(){
  $(this).hide();
});

$('#h').click(function(){
  $(this).hide();
});

$('#i').click(function(){
  $(this).hide();
});

$('#j').click(function(){
  $(this).hide();
});

$('#k').click(function(){
  $(this).hide();
});

$('#l').click(function(){
  $(this).hide();
});

$('#m').click(function(){
  $(this).hide();
});

$('#n').click(function(){
  $(this).hide();
});

$('#o').click(function(){
  $(this).hide();
});

$('#p').click(function(){
  $(this).hide();
});

$('#q').click(function(){
  $(this).hide();
});

$('#r').click(function(){
  $(this).hide();
});

$('#s').click(function(){
  $(this).hide();
});

$('#t').click(function(){
  $(this).hide();
});

$('#u').click(function(){
  $(this).hide();
});

$('#v').click(function(){
  $(this).hide();
});





});
