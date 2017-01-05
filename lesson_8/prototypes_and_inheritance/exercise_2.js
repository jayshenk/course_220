function shallowCopy(object) {
  var prototype = Object.getPrototypeOf(object);
  var copy = Object.create(prototype);

  Object.getOwnPropertyNames(object).forEach(function(property) {
    copy[property] = object[property];
  });

  return copy;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log("c is " + this.c);
}

var baz = shallowCopy(bar);
console.log(baz.a);       // 1
console.log(baz.say());   // c is 3