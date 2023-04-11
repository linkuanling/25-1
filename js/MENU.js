$(function(){

    if($(window).width()<=414){
  
      $(".button1").click(function(){
        $(".button1").toggleClass("toggled");
      });
    
      $('.nav_right ul').hide();
      $('.container1').click(function(){
        $('.nav_right ul').slideToggle();
      });
      
    };

});


$(function(){

    if($(window).width()<=414){
  
      $(".button2").click(function(){
        $(".button2").toggleClass("toggled");
      });
    
      $('.nav').hide();
      $('.container2').click(function(){
        $('.nav').slideToggle();
      });

    };

});


$(function(){

    if($(window).width()<=414){

      let i = $(".main")[0].getBoundingClientRect().top + window.scrollY;
      
      $(window).scroll(function(){

        // getBoundingClientRect 判定nav到畫面4邊的距離
        //   $(".nav")[0].getBoundingClientRect().top;
        console.log( $(".main")[0].getBoundingClientRect().top + window.scrollY);
        // console.log( $(".nav")[0].offsetTop);
        
        if(window.scrollY > i){
          
          $(".nav")[0].style.top =  window.scrollY - i + "px"
          }
        else{
          $(".nav")[0].style.top = 0
        };

      });

    };

});

