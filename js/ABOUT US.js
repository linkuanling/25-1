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

  if($(window).width()<=414){
    
    $('.main ul li').click(function(){
      $(this).css("background-color", "rgba(0, 0, 0, 0)");
    });
  }

});