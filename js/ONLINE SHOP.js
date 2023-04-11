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

/*---------------------------------------------------------------*/

$(function(){

    if($(window).width()<=414){
      let i = $(".main")[0].getBoundingClientRect().top + window.scrollY;
      
      $(window).scroll(function(){

        // getBoundingClientRect 判定nav到畫面4邊的距離
        //   $(".nav")[0].getBoundingClientRect().top
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

/*---------------------------------------------------------------*/

$(function(){

    var clicked = false; 
    $('.fa-heart').click(function(){
      if(clicked){
        $(this).css("color", "#54433265"); 
      } else {
        $(this).css("color", "#544332"); 
      }
      clicked =!clicked;
    });

});

/*---------------------------------------------------------------*/

let lightbox1 = document.getElementsByClassName("lightbox1")[0];
let productIntro = document.getElementsByClassName("productIntro");

// 了解詳情
var in1 = document.getElementsByClassName("in1");
for(let i=0 ; i<=8 ; i++){

  in1[i].addEventListener("click", function(){

    lightbox1.classList.remove("none1");
    for(let j=0 ; j<=8 ; j++){
      productIntro[j].style.display = "none"
    }

    productIntro[i].style.display = "block"

  });

};

/*---------------------------------------------------------------*/

var close1 = document.getElementsByClassName("close1")[0];
close1.addEventListener("click", function(){
  lightbox1.classList.add("none1");
});

lightbox1.addEventListener("click", function(){
  this.classList.add("none1");
});

lightbox1.querySelector("article").addEventListener("click", function(e){
  e.stopPropagation();
});

/*---------------------------------------------------------------*/

$(function(){

  var clicked1 = false; 
  $('.fa-circle-xmark').click(function(){
    if(clicked1){
      $(this).css("color", "#54433260"); 
    } else {
      $(this).css("color", "#544332"); 
    }
    clicked1 =!clicked1;
  });

  var clicked2 = false; 
  $('.send').click(function(){
    if(clicked2){
      $(this).css("background-color", "#54433260");
      $(this).css("color", "#544332");
    } else {
      $(this).css("background-color", "#544332");
      $(this).css("color", "#FAF5ED"); 
    }
    clicked2 =!clicked2;
  });

});

/*---------------------------------------------------------------*/

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