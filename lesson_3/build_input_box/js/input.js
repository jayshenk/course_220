document.addEventListener('DOMContentLoaded', buildInput);

var blink;
var textEditable;

function buildInput() {
  var field = document.querySelector('.text-field');
  var content = document.querySelector('.content');
  
  field.addEventListener('click', function(event) {
    event.stopPropagation();
    
    this.classList.add('focused');
    textEditable = true;
    blinkCursor.call(this);
  });
  
  document.addEventListener('click', function() {
    field.classList.remove('focused', 'cursor');
    textEditable = null;
    clearInterval(blink);
  });
  
  document.addEventListener('keypress', function(event) {
    if (textEditable) {
      content.textContent += event.key;
    }
  });
  
  document.addEventListener('keyup', function(event) {
    if (textEditable && event.key === 'Backspace') {
      var text = content.textContent;
      content.textContent = text.split('').slice(0, text.length - 1).join('');
    }
  });
}

function blinkCursor() {
  var self = this;
  blink = setInterval(function() {
    self.classList.toggle('cursor');
  }, 500);
}
