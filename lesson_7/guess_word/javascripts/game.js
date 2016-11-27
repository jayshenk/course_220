var $message = $('#message');
var $letters = $('#spaces');
var $guesses = $('#guesses');
var $apples = $('#apples');

var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];
  var idx = Math.floor(Math.random() * words.length);

  return words.splice(idx, 1)[0];  
}

var Game = {
  word: '',
  incorrect: 0,
  lettersGuessed: [],
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

  init: function() {
    this.word = randomWord();
    if (!this.word) {
      this.displayMessage('Sorry, I\'ve run out of words!');
    }
    this.word = this.word.split('');
    this.createBlanks();
    return this;
  }
}

var game = Object.create(Game);
game.init();