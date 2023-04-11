$(function(){

  var clicked1 = false;
    $('.fa-user').click(function(){
      if(clicked1){
        $(this).css("color", "#FAF5ED"); 
      } else {
        $(this).css("color", "#F3D1AA"); 
      }
      clicked1 =!clicked1;
    });

    var clicked2 = false;
    $('.fa-cart-shopping').click(function(){
      if(clicked2){
        $(this).css("color", "#FAF5ED"); 
      } else {
        $(this).css("color", "#F3D1AA"); 
      }
      clicked2 =!clicked2;
    });

});

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

let lightbox = document.getElementsByClassName("lightbox")[0];
let fa_user = document.getElementsByClassName("fa-user")[0];

fa_user.addEventListener("click", function(){
  lightbox.classList.remove("none");
});

let send4 = document.getElementsByClassName("send4")[0];
send4.addEventListener("click", function(){
  lightbox.classList.add("none");
});

lightbox.addEventListener("click", function(){
  this.classList.add("none");
});

lightbox.querySelector("article").addEventListener("click", function(e){
  e.stopPropagation();
});