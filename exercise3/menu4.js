

$(document).ready(function(){

  var hotdogs = true;
  var toppings = true;
  var drinks = true;
  var icecream = true;


  $('#dot-top-left').click(function(){
    changehotdogs();
  });

  $('#dot-bottom-right').click(function(){
    changedrinks();
  });

  $('#dot-top-right').click(function(){
    changetoppings();
  });

  $('#dot-bottom-left').click(function(){
    changeicecream();
  });







  function changehotdogs() {

    if (hotdogs == true){
      $('.fifth li').css('opacity','1');
      $('.fourth li').css('opacity','1');
      $('.third li').css('opacity','1');
      $('.second li').css('opacity','1');
      $('.first li').css('opacity','1');
      hotdogs = false;
    }

    else {
      $('.fifth li').css('opacity','0');
      $('.fourth li').css('opacity','0');
      $('.third li').css('opacity','0');
      $('.second li').css('opacity','0');
      $('.first li').css('opacity','0');
      hotdogs = true;
    }
  }


  function changedrinks() {

    if (drinks == true){
      $('.seventh li').css('opacity','1');
      drinks = false;
    }

    else {
      $('.seventh li').css('opacity','0');
      drinks = true;
    }
  }


  function changetoppings() {

    if (toppings == true){
      $('.sixth li').css('opacity','1');
      toppings = false;
    }

    else {
      $('.sixth li').css('opacity','0');
      toppings = true;
    }
  }

  function changeicecream() {

    if (icecream == true){
      $('.eighth li').css('opacity','1');
      icecream = false;
    }

    else {
      $('.eighth li').css('opacity','0');
      icecream = true;
    }
  }



    });
