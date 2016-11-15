$(function() {

  var tabIndex = localStorage.tabIndex;
  var background = localStorage.background;

  if (tabIndex) {
    changeTabs(tabIndex);
  }

  if (background) {
    $("body").css("background", background);
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