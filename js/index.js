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
    pause: 2500,
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
