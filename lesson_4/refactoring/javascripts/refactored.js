$(function() {

  var birthstones = {
    January: "garnet",
    February: "amethyst",
    March: "aquamarine or bloodstone",
    April: "diamond",
    May: "emerald",
    June: "pearl, moonstone, alexandrite",
    July: "ruby",
    August: "peridot",
    September: "sapphire",
    October: "opal or tourmaline",
    November: "topaz or citrine",
    December: "turquoise, zircon, or tanzanite",
  };

  function getLuhnTotal(cardNumber) {
    var odd_total = 0;
    var even_total = 0;
    var cardNumber = cardNumber.split("").reverse();

    for (var i = 0, len = cardNumber.length; i < len; i++) {
      if (i % 2 == 1) {
        cardNumber[i] = (+cardNumber[i] * 2) + "";
        if (cardNumber[i].length > 1) {
          cardNumber[i] = +cardNumber[i][0] + +cardNumber[i][1];
        }
        else {
          cardNumber[i] = +cardNumber[i];
        }
        odd_total += cardNumber[i];
      }
      else {
        even_total += +cardNumber[i];
      }
    }
    return odd_total + even_total;
  }

  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("visible");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("visible");
  });

  $("button, .button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var total = getLuhnTotal(cc_number);
    var is_valid = total % 10 === 0;

    $(this).find(".success").toggle(is_valid);
    $(this).find(".error").toggle(!is_valid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();
    var message = "Your birthstone is ";
    var month = $(this).text();
    var $stone = $("#birthstone");

    $stone.text(message + birthstones[month]);
  });
});
