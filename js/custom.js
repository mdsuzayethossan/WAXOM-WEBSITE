$(function (){
 //venobox

 $(document).ready(function(){
    $('.venobox').venobox(); 
});

//counter
$('.counter').counterUp({
    delay: 5,
    time: 2000
});
//slick

$('.blog').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    centerMode:true,
    centerPadding:false,
  });

  $(window).scroll(function (){
    var scrolling = $(this).scrollTop();
    if(scrolling > 150){
      $('.navbar').addClass('bg');
    }
    else {
      $('.navbar').removeClass('bg');

    }

  });

  // slowMotion
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 80
              }, 3000);
              return false;
          }
      }
  });




});