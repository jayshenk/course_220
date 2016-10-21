$(function() {

  function adjustControls(index) {
    var $previous = $('#previous');
    var $next = $('#next');

    if (index === 0) {
      $previous.hide();
      $next.show();
    } else if (index === 3) {
      $next.hide();
      $previous.show();
    } else {
      $('.controls a').show();
    }
  }

  function changeLargeImage(index) {
    $('figure img').finish();
    $('figure img:visible').fadeOut(200, function() {
      $('figure img').eq(index).fadeIn(200);
    });
    adjustControls(index);
  }

  $('li img').click(function() {
    var $e = $(this);
    var index = $e.parent().index();

    $('.active').removeClass('active');
    $e.addClass('active');
    changeLargeImage(index);
  });

  $('.controls a').click(function(e) {
    e.preventDefault();
    var $e = $(this);
    var index = $('.active').parent().index();

    $e.attr('id') === 'previous' ? index-- : index++;
    $('.active').removeClass('active');
    $('li').eq(index).find('img').addClass('active');
    changeLargeImage(index);
  });

});
