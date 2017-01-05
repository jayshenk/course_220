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

  var slideshow = {
    $el: $("#slideshow"),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find("figure:visible");
      var $prev = $current.prev("figure");

      if (!$prev.length) {
        $prev = this.$el.find("figure").last();
      }
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr("data-id"));
      actions.init();
    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find("figure:visible");
      var $next = $current.next("figure");

      if (!$next.length) {
        $next = this.$el.find("figure").first();
      }
      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr("data-id"));
      actions.init();
    },
    renderPhotoContent: function(idx) {
      $("[name=photo_id]").val(idx);
      renderPhotoInformation(Number(idx));
      getCommentsFor(idx);
    },
    bind: function() {
      this.$el.find("a.prev").on("click", this.prevSlide.bind(this));
      this.$el.find("a.next").on("click", this.nextSlide.bind(this));
    },
    init: function() {
      this.bind();
    }
  };

  var actions = {
    $el: $("section header"),
    like: function(e) {
      e.preventDefault();
      var $like = this.$el.find("a.like");
      addLike($like.attr("data-id"));
    },
    favorite: function(e) {
      e.preventDefault();
      var $favorite = this.$el.find("a.favorite");
      addFavorite($favorite.attr("data-id"));
    },
    bind: function() {
      this.$el.find("a.like").on("click", this.like.bind(this));
      this.$el.find("a.favorite").on("click", this.favorite.bind(this));
    },
    init: function() {
      this.bind();
    }
  };

  $.ajax({
    url: "/photos",
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      slideshow.init();
      actions.init();
      getCommentsFor(photos[0].id);
    }
  });

  $("#comments form").on("submit", function(e) {
    e.preventDefault();
    var $f = $(this);

    $.ajax({
      url: $f.attr("action"),
      data: $f.serialize(),
      type: $f.attr("method"),
      success: function(comment_json) {
        $("#comments ul").append(templates.comment(comment_json));
      }
    });
  });

  function renderPhotos() {
    $("#slides").html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    var photo = photos.filter(function(item) {
      return item.id === idx;
    })[0];
    $("section > header").html(templates.photo_information(photo));    
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

  function addLike(idx) {
    $.ajax({
      url: "/photos/like",
      data: "photo_id=" + idx,
      type: "POST",
      success: function(json) {
        var photo = photos.filter(function(item) {
          return item.id === Number(idx);
        })[0];
        var $like = $("a.like");
        var text = $like.text();
        photo.likes = json.total;
        $like.text(text.replace(/\d+/, json.total));
      }
    });
  }

  function addFavorite(idx) {
    $.ajax({
      url: "/photos/favorite",
      data: "photo_id=" + idx,
      type: "POST",
      success: function(json) {
        var photo = photos.filter(function(item) {
          return item.id === Number(idx);
        })[0];
        var $favorite = $("a.favorite");
        var text = $favorite.text();
        photo.favorites = json.total;
        $favorite.text(text.replace(/\d+/, json.total));
      }
    });
  }
});