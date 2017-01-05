Object.prototype.begetObject = function() {
  function ctor(){}
  ctor.prototype = this;
  return new ctor;
}

var foo = {
  a: 1,
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);      // true