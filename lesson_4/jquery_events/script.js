$(function() {

  $('form').submit(function(e) {
    e.preventDefault();
    var key = $(this).find('input[type=text]').val();
    var character_code = key.charCodeAt(0);

    $(document).off('keypress').on('keypress', function(e) {
      if (e.which !== character_code) {
        return;
      }

      $('a').trigger('click');
    });
  });

  $('a').click(function(e) {
    e.preventDefault();
    $('#accordion').slideToggle();
  });

});