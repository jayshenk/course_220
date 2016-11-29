var $message = $('#message');
var $letters = $('#spaces');
var $guesses = $('#guesses');
var $apples = $('#apples');
var $replay = $('#replay');

var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];

  return function() {
    var idx = Math.floor(Math.random() * words.length);
    return words.splice(idx, 1)[0];
  };
}();

var Game = {
  incorrect: 0,
  maxWrongGuesses: 6,

  createBlanks: function() {
    var spaces = (new Array(this.word.length + 1)).join('<span></span>');

    $letters.find('span').remove();
    $letters.append(spaces);
    this.$spaces = $('#spaces span');
  },

  displayMessage: function(text) {
    $message.text(text);
  },

  guess: function(e) {
    var charCode = e.which;
    var letter = String.fromCharCode(charCode);
    if ((charCode < 97 || charCode > 122) ||
        this.lettersGuessed.indexOf(letter) !== -1) { 
      return;
    }

    this.lettersGuessed.push(letter);
    $guesses.append('<span>' + letter + '</span>');
    if (this.isCorrect(letter)) {
      this.correctGuess(letter);
    } else {
      this.wrongGuess();
    }
  },

  isCorrect: function(letter) {
    return this.word.indexOf(letter) !== -1;
  },

  correctGuess: function(letter) {
    this.word.forEach(function(ltr, idx) {
      if (ltr === letter) {
        this.$spaces.eq(idx).text(letter);
      }
    }.bind(this));

    if (this.$spaces.filter(':empty').length === 0) {
      this.win();
    }
  },

  wrongGuess: function() {
    this.incorrect++;
    $apples.attr('class', 'guess_' + this.incorrect);

    if (this.incorrect === 6) {
      this.lose();
    }
  },

  win: function() {
    this.displayMessage('You win!');
    $(document.body).addClass('win');
    this.end();
  },

  lose: function() {
    this.displayMessage('Sorry! You\'re out of guesses.');
    $(document.body).addClass('lose');
    this.end();
  },

  end: function() {
    $replay.show();
    $(document).off();
  },

  bindEvents: function() {
    $(document).on('keypress', this.guess.bind(this));
  },

  init: function() {
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage('Sorry, I\'ve run out of words!');
    }
    this.word = this.word.split('');
    this.lettersGuessed = [];
    this.createBlanks();
    this.bindEvents();
    return this;
  }
};

$replay.on('click', function(e) {
  e.preventDefault();

  $(document.body).removeAttr('class');
  $apples.removeAttr('class');
  $message.empty();
  $replay.hide();
  $letters.find('span').remove();
  $guesses.find('span').remove();
  game = Object.create(Game);
  game.init();
});

var game = Object.create(Game);
game.init();