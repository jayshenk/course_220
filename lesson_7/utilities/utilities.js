(function() {

  var findObjs = function(element, props, multiple) {
    var match = multiple ? [] : undefined;

    element.some(function(obj) {
      var allMatch = true;
      for (var prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop]) {
          allMatch = false;
        }
      }

      if (allMatch) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  }

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
      },
      findWhere: function(props) {
        return findObjs(element, props, false);
      },
      where: function(props) {
        return findObjs(element, props, true);
      },
      pluck: function(query) {
        var vals = [];

        element.forEach(function(obj) {
          if (obj[query]) {
            vals.push(obj[query]);
          }
        });

        return vals;
      },
      keys: function() {
        var keys = [];

        for (var prop in element) {
          keys.push(prop);
        }

        return keys;
      },
      values: function() {
        var vals = [];

        for (var prop in element) {
          vals.push(element[prop]);
        }

        return vals;
      },
      pick: function() {
        var args = [].slice.call(arguments);
        var picked = {};

        args.forEach(function(arg) {
          if (element[arg]) {
            picked[arg] = element[arg];
          }
        });

        return picked;
      },
      omit: function() {
        var args = [].slice.call(arguments);
        var newObj = {};

        args.forEach(function(arg) {
          if (!element[arg]) {
            newObj[arg] = element[arg];
          }
        });

        return newObj;
      },
      has: function(prop) {
        return {}.hasOwnProperty.call(element, prop);
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

  _.extend = function() {
    var args = [].slice.call(arguments);
    var oldObj = args.pop();
    var newObj = args[args.length - 1];

    for (var prop in oldObj) {
      newObj[prop] = oldObj[prop];
    }

    return args.length === 1 ? newObj : _.extend.apply(_, args);
  };

  window._ = _;
})();