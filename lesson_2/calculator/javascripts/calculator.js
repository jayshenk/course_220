$(function() {

  $('form').submit(function(e) {
    e.preventDefault();

    var firstNumber = +$('#first-number').val();
    var secondNumber = +$('#second-number').val();
    var operator = $('select').val();
    var result;

    if (operator === '+') {
      result = firstNumber + secondNumber;
    } else if (operator === '-') {
      result = firstNumber - secondNumber;
    } else if (operator === '*') {
      result = firstNumber * secondNumber;
    } else {
      result = firstNumber / secondNumber;
    }

    $('#result').text(result);
  });

});
