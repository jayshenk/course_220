function extend(destination) {
  var source;

  for (var i = 1; i < arguments.length; i++) {
    source = arguments[i];
    for (prop in source) {
      destination[prop] = source[prop];
    }
  }

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe',
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);        // 1
console.log(object.sayHello()); // Hello, Joe