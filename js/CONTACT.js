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

  var clicked = false;
    $('.send').click(function(){
      if(clicked){
        $('.send').css("background-color", "#FAF5ED");
        $('.send').css("color", "#006980"); 
          
      } else {
        $('.send').css("background-color", "#006980");
        $('.send').css("color", "#FAF5ED"); 
      }
      clicked =!clicked;
    });

})