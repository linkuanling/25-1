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

/*---------------------------------------------------------------*/

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

/*---------------------------------------------------------------*/

$(function(){

  var clicked1 = false;
    $('.send1').click(function(){
      if(clicked1){
        $('.send1').css("background-color", "#FFE7CC");
        $('.send1').css("color", "#544332"); 
          
      } else {
        $('.send1').css("background-color", "#544332");
        $('.send1').css("color", "#FFE7CC"); 
      }
      clicked1 =!clicked1;
    });

});

/*---------------------------------------------------------------*/

$(function(){

  var clicked2 = false;
    $('.fa-trash-can').click(function(){
      if(clicked2){
        $(this).css("color", "#FAF5ED"); 
          
      } else {
        $(this).css("color", "#874800"); 
      }
      clicked2 =!clicked2;
    });

});

/*---------------------------------------------------------------*/

$(function(){

  var clicked1 = false;
    $('.send2').click(function(){
      if(clicked1){
        $('.send2').css("background-color", "#FFE7CC");
        $('.send2').css("color", "#544332"); 
          
      } else {
        $('.send2').css("background-color", "#544332");
        $('.send2').css("color", "#FFE7CC"); 
      }
      clicked1 =!clicked1;
    });

});

/*---------------------------------------------------------------*/

$(function(){

  var clicked1 = false;
    $('.send3').click(function(){
      if(clicked1){
        $('.send3').css("background-color", "#FFE7CC");
        $('.send3').css("color", "#544332"); 
          
      } else {
        $('.send3').css("background-color", "#544332");
        $('.send3').css("color", "#FFE7CC"); 
      }
      clicked1 =!clicked1;
    });

});

/*---------------------------------------------------------------*/

if($(window).width()<=414){

  let lightbox = document.getElementsByClassName("lightbox")[0];

  // 檢視購物車
  var send1 = document.getElementsByClassName("send1")[0];
  send1.addEventListener("click", function(){
    lightbox.classList.remove("none");
  });

  var send2 = document.getElementsByClassName("send2")[1];
    send2.addEventListener("click", function(){
    lightbox.classList.add("none");
  });

  lightbox.addEventListener("click", function(){
    this.classList.add("none");
  });

  lightbox.querySelector("article").addEventListener("click", function(e){
    e.stopPropagation();
  });

};

/*---------------------------------------------------------------*/

let lightbox1 = document.getElementsByClassName("lightbox1")[0];
let fa_user = document.getElementsByClassName("fa-user")[0];

fa_user.addEventListener("click", function(){
  lightbox1.classList.remove("none1");
});

let send4 = document.getElementsByClassName("send4")[0];
send4.addEventListener("click", function(){
  lightbox1.classList.add("none1");
});

lightbox1.addEventListener("click", function(){
  this.classList.add("none1");
});

lightbox1.querySelector("article").addEventListener("click", function(e){
  e.stopPropagation();
});
