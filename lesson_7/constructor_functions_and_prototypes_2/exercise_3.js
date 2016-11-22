function createObject(obj) {
  function ctor() { }
  ctor.prototype = obj;
  return new ctor();
}

var foo = {
  a: 1,
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);       // true