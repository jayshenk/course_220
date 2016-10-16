$(function() {
  var $list = $('#list');

  $('form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    var item = $form.find('#item').val();
    var quantity = $form.find('#quantity').val();
    if (quantity === '') {
      quantity = '1';
    }

    var text = quantity + ' ' + item;
    $list.append('<li>' + text + '</li>');
    $form[0].reset();
  });

});