var inventory;

(function() {
  inventory = {
    collection: [],
    last_id: 0,
    setDate: function() {
      var date = new Date();
      $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $i_tmpl = $("#inventory_item").remove();
      this.template = $i_tmpl.html();
    },
    add: function() {
      this.last_id++;
      var item = {
        id: this.last_id,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function($item) {
      var id = this.findID($item);
      var item = this.get(id);

      item.name = $item.find("[name^=item_name]").val();
      item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();
      var $item = $(this.template.replace(/ID/g, item.id));

      $("#inventory").append($item);
    },
    findParent: function(e) {
      return $(e.target).closest("tr");
    },
    findID: function($item) {
      return Number($item.find("input[type=hidden]").val());
    },
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();

      this.remove(this.findID($item));
    },
    bindEvents: function() {
      $("#add_item").on("click", this.newItem.bind(this));
      $("#inventory").on("click", "a.delete", this.deleteItem.bind(this));
      $("#inventory").on("blur", ":input", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };

})();

$(inventory.init.bind(inventory));
