$(function() {
  var templates = {};
  var photos;

  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
  });

  $("[data-type=partial]").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  $.ajax({
    url: "/photos",
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(0);
      getCommentsFor(photos[0].id);
    }
  });

  $("#slideshow .prev").on("click", function(e) {
    e.preventDefault();
    var $figure = $("#slides figure:visible");
    var $prev;
    var id;

    if ($figure.is(":first-child")) {
      $prev = $("#slides figure:last-child");
    } else {
      $prev = $figure.prev();
    }

    $figure.fadeOut(500);
    $prev.fadeIn(500);
    id = $prev.data("id");
    renderPhotoInformation(id - 1);
    getCommentsFor(id);
  });

  $("#slideshow .next").on("click", function(e) {
    e.preventDefault();
    var $figure = $("#slides figure:visible");
    var $next;
    var id;

    if ($figure.is(":last-child")) {
      $next = $("#slides figure:first-child");
    } else {
      $next = $figure.next();
    }

    $figure.fadeOut(500);
    $next.fadeIn(500);
    id = $prev.data("id");
    renderPhotoInformation(id - 1);
    getCommentsFor(id);
  });

  function renderPhotos() {
    $("#slides").html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    $("section > header").html(templates.photo_information(photos[idx]));    
  }

  function getCommentsFor(idx) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + idx,
      success: function(comment_json) {
        $("#comments ul").html(templates.comments({ comments: comment_json }));
      }
    });
  }
});