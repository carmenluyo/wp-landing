// deslis lento


$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
});


$(document).ready(function(){
  $(window).scroll(function(){
    var prueba = $(this).scrollTop();
    
    if (prueba > 100) {
      $(".menubar").addClass("navegacion");
      $(".mostrar-modal").addClass("navegacion");
    }
      else if (prueba < 100) {
      $(".menubar").removeClass("navegacion");
      $(".mostrar-modal").removeClass("navegacion");
    }
  });

  $('.mostrar-modal').click(function(){
    $('.mostrar-modal').hide();
    $('.cerrar-modal').show(500);
  });
  $('.cerrar-modal').click(function(){
    $('.mostrar-modal').show(600);
    $('.cerrar-modal').hide(400);
  });
});




$('#menubar-responsive li a').click(function(){
$('#cerrar-modal').setAttribute('checked','checked');
});