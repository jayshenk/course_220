$(function() {

  var answer = Math.floor(Math.random() * 100) + 1;
  var message;
  var guesses = 0;

  $('form').submit(function(e) {
    e.preventDefault();

    guesses++;
    var guess = +$('#guess').val();

    if (guess > answer) {
      message = 'My number is lower than ' + guess;
    } else if (guess < answer) {
      message = 'My number is higher than ' + guess;
    } else {
      message = 'You are correct! It took you ' + guesses + ' guesses.'
    }

    $('p').text(message);
  });

  $('a').click(function(e) {
    e.preventDefault();

    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    message = 'Guess a number from 1 to 100';
    $('p').text(message);
  });

});
