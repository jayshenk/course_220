var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];

  return function() {
    var idx = Math.floor(Math.random() * words.length);

    return words.splice(idx, 1)[0];
  };
}();