function getDefiningObject(object, propKey) {
  while (object) {
    if (object.hasOwnProperty(propKey)) {
      return object
    }
    object = Object.getPrototypeOf(object);
  }
  return null;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar); // true
console.log(getDefiningObject(qux, 'e'));         // null