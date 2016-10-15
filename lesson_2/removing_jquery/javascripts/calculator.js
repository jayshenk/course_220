window.onload = function() {

  function $(id_selector) {
    return document.getElementById(id_selector);
  }

  $('calculator').onsubmit = function(e) {
    e.preventDefault();

    var firstNumber = +$('first-number').value;
    var secondNumber = +$('second-number').value;
    var operator = $('operator').value;
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

    $('result').innerHTML = result;
  };

};
