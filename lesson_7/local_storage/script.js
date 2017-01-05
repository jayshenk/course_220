$(function() {

  var tabIndex = localStorage.tabIndex;
  var background = localStorage.background;
  var notes = localStorage.notes;

  if (tabIndex) {
    changeTabs(tabIndex);
  }

  if (background) {
    $("body").css("background", background);
  }

  if (notes) {
    $("textarea").val(notes);
  }

  $("nav a").on("click", function(e) {
    e.preventDefault();
    var $e = $(this);
    tabIndex = $("nav a").index($e);

    changeTabs(tabIndex);
  });

  $("input[name=background]").on("change", function() {
    background = $(":checked").val();

    $("body").css("background", background);
    localStorage.setItem("background", background);
  });

  $(window).on("unload", function() {
    localStorage.notes = $("textarea").val();
  });

  function changeTabs(index) {
    var $nav = $("nav");
    var $tabs = $("#tabs");

    $nav.find("a.active").removeClass("active");
    $nav.find("a").eq(index).addClass("active");
    $tabs.find("article:visible").hide();
    $tabs.find("article").eq(index).show();
    localStorage.setItem("tabIndex", tabIndex);
  }

});