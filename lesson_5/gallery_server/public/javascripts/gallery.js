$(function() {

  var $photos = $("#photos").remove();
  var $photoInfo = $("#photo_information").remove();
  var photosTemplate = Handlebars.compile($photos.html());
  var photoInfoTemplate = Handlebars.compile($photoInfo.html());

  $.ajax({
    url: "/photos",
    type: "GET",
    dataType: "json",
  }).done(function(photos) {
    $("#slides").html(photosTemplate({ photos: photos }));
    $("section > header").html(photoInfoTemplate(photos[0]));
  });

});