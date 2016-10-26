$(function() {

  var $blinds = $("[id^=blind]");
  var speed = 250;
  var delay = 1500;

  $blinds.each(function(i) {
    var $blind = $blinds.eq(i);
    var totalDelay = delay * i + speed;

    $blind.delay(totalDelay).animate({
      top: $blind.position().top + $blind.height(),
      height: 0,
    }, speed);
  });

});
