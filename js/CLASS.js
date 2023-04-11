$(function(){

    if($(window).width()<=414){
      $("button").click(function(){
        $("button").toggleClass("toggled");
      });
    
      $('.nav_right ul').hide();
      $('.container').click(function(){
        $('.nav_right ul').slideToggle();
      });
    };
  
});


$(function(){

    var clicked1 = false; 
    $('.fa-heart').click(function(){
      if(clicked1){
        $('.fa-heart').css("color", "#ffe7ccbb"); 
        
      } else {
        $('.fa-heart').css("color", "#544332"); 
      }
      clicked1 =!clicked1;
    });

    var clicked2 = false;
    $('.send').click(function(){
      if(clicked2){
        $('.send').css("background-color", "#FFE7CC");
        $('.send').css("color", "#544332"); 
          
      } else {
        $('.send').css("background-color", "#544332");
        $('.send').css("color", "#FAF5ED"); 
      }
      clicked2 =!clicked2;
    });

});


$(document).ready(function(){

  $('.bxslider1').bxSlider({
    captions: true,
    slideWidth: 390,
    minSlides: 1,
    maxSlides: 2
  });
  $(".bx-wrapper").css({border: "0", margin: "30px auto 80px"});

});
  

$(document).ready(function(){

  $('.bxslider2').bxSlider({
    captions: true,
    slideWidth: 500,
    minSlides: 1,
    maxSlides: 2
  });
  $(".bx-wrapper").css({border: "0", margin: "30px 10px 80px"});

});