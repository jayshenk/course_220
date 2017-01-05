$(function() {

  var $canvas = $("#canvas");

  function getFormObject($f) {
    var o = {};

    $f.serializeArray().forEach(function(input) {
      o[input.name] = input.value;
    });

    return o;
  }

  function createElement(data) {
    var $d = $("<div />", {
      "class": data.shape_type,
      data: data
    });

    resetElement($d);

    return $d;
  }

  function resetElement($e) {
    $e.css({
      left: +$e.data("start_x"),
      top: +$e.data("start_y")
    });
  }

  function animateElement($e) {
    $e.animate({
      left: $e.data("end_x"),
      top: $e.data("end_y")
    }, 1000);
  }

  $("form").submit(function(e) {
    e.preventDefault();
    
    var $f = $(this);
    var data = getFormObject($f);

    $canvas.append(createElement(data));
  });

  $("#animate").click(function(e) {
    e.preventDefault();

    var $shapes = $canvas.find("div");

    $shapes.stop();
    $shapes.each(function() {
      var $shape = $(this);
      resetElement($shape);
      animateElement($shape);
    });
  });

  $("#stop").click(function(e) {
    e.preventDefault();

    var $shapes = $canvas.find("div");

    $shapes.stop();
  });

});