$(function() {

  var tabIndex = localStorage.tabIndex;

  if (tabIndex) {
    changeTabs(tabIndex);
  }

  $("nav a").on("click", function(e) {
    e.preventDefault();
    var $e = $(this);
    tabIndex = $("nav a").index($e);

    changeTabs(tabIndex);
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