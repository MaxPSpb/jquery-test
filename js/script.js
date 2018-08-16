$(document).ready(function(){

  $('.video-wrap').slick();


  $(".video-wrap").fancybox({
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn'   : 600,
    'speedOut'    : 200,
    'overlayShow' : false
  });

  $('.custom-select').selectize();

  function calculateCartPrice() {
    var price = 0;
    $('#cart tr').each(function(){
      var priceItem = $(this).find('.price').text() * $(this).find('input').val();
      price = price + priceItem;
    });
    $('#price').text(price);
  }

  calculateCartPrice();

  $('#cart input').on('change', function(){
    calculateCartPrice();
  });

});
