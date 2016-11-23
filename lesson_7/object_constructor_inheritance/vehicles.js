function Vehicle() {
}

Vehicle.prototype = {
  doors: 4,
  wheels: 4
}

function Coupe() {
}

Coupe.prototype = new Vehicle();
Coupe.prototype.constructor = Coupe;
Coupe.prototype.doors = 2;

function Motorcycle() {
}

Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.constructor = Motorcycle;
Motorcycle.prototype.doors = 0;
Motorcycle.prototype.wheels = 2;

function Sedan() {
}

Sedan.prototype = Object.create(Vehicle.prototype);