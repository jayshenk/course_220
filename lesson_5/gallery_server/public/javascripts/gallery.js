$(function() {
  var templates = {};
  var photos;
  var comments;

  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
  });

  Handlebars.registerPartial("comment", $("#comment").html());

  $.ajax({
    url: "/photos",
    success: function(json) {
      photos = json;
      $("#slides").html(templates.photos({ photos: photos }));
      $("section > header").html(templates.photo_information(photos[0]));
    }
  });

  $.ajax({
    url: "/comments?photo_id=1",
    success: function(json) {
      comments = json;
      $("#comments > ul").html(templates.comments({ comments: comments }));
    }
  });
});