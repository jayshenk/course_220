function Ninja() {
  this.swung = true;
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
}

console.log(ninja.swingSword()); // true

// Even though the swingSword method is defined on the prototype after the
// ninja object is created, the prototype chain lookup happens when the
// swingSword method is called on the object, and it can be found.