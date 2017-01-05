$(function() {

  $('body > header').prependTo('body');
  $('main > h1').prependTo('body > header');
  $('figure').appendTo('article');
  $('figure:last-child img').prependTo('figure:nth-child(3)');
  $('figure:nth-child(3) img + img').prependTo('figure:last-child');

});
