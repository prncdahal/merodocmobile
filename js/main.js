$(document).ready(function(){

    $('.billboard').slick({
        infinite:true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        dots:true
    });

});
// Floating button Effects
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    // downscroll code
    $('.floating-btn').addClass('open')
       
   } else {
      // upscroll code
      $('.floating-btn').removeClass('open')
   }
   lastScrollTop = st;
});