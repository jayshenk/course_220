(function() {
  var _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var newArr = [];
        var args = Array.prototype.slice.call(arguments);

        element.forEach(function(el) {
          if (args.indexOf(el) === -1) {
            newArr.push(el);
          }
        });

        return newArr;
      },
      lastIndexOf: function(search) {
        var idx = -1;

        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }

        return idx;
      },
      sample: function(qty) {
        var sampled = [];
        var copy = element.slice();
        var get = function() {
          var idx = Math.floor(Math.random() * copy.length);
          var el = copy[idx];

          copy.splice(idx, 1);
          return el;
        };

        if (!qty) { return get(); }
        while(qty) {
          sampled.push(get());
          qty--;
        }

        return sampled;
      }
    };

    return u;
  };

  _.range = function(start, stop) {
    var range = [];
    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    for (var i = start; i < stop; i++) {
      range.push(i);
    }

    return range;
  };

  window._ = _;
})();