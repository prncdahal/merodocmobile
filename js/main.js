$(document).ready(function(){

    $('.billboard').slick({
        infinite:true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        dots:true
    });

    // Toggle on check
    $("#showMap").change(function() {
        if(this.checked) {
           $('.map-range').addClass('d-block');
        } else{
            $('.map-range').removeClass('d-block');
        }
    });

    // $(document).bind("contextmenu", function (e) {
    //     return false;
    // });

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

