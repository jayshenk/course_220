var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

var ninjaB = Object.create(ninjaA);

console.log(ninjaB.constructor === ninjaA.constructor)  // true