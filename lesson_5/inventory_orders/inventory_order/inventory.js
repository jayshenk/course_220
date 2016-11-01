var inventory;

(function() {
  inventory = {
    collection: [],
    setDate: function() {
      var date = new Date();
      $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $i_tmpl = $("#inventory_item").remove();
      this.template = $i_tmpl.html();
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
    }
  };

})();

$(inventory.init.bind(inventory));