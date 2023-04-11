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

  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600,
    auto: true,
    pause: 2000,
  });

  $(".bx-wrapper").css({border: "0", margin: "30px auto 80px"});
  $("[aria-hidden='false']").css({width: "auto"});

});


$(function(){

  document.getElementById("mySelect").addEventListener("change", function() {
    var selectedValue = this.value; // 獲取選擇的值
    var iframe = document.getElementById("myIframe"); // 獲取 iframe 元素
    iframe.src = selectedValue; // 將 iframe 的 src 設置為選擇的值
  });
  
})

 
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

