'use strict';
const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
};

Person.prototype.random = function () {
  console.log(this);
};

const jonas = new Person('Jonas', 22);
console.log(jonas);
// Inherited from "Object"
console.log(jonas.hasOwnProperty('firstName'));

//******************** Coding Challenge 1 ***********************

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed = `${Number(this.speed.split(' ')[0]) + 10} km/hr`;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = `${Number(this.speed.split(' ')[0]) - 5} km/hr`;
  console.log(this.speed);
};

const bmw = new Car('BMW', '120 km/hr');
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', '95 km/hr');
mercedes.accelerate();
mercedes.brake();

// ****************************** ES6 Classes, Setters and Getters *******************************************

class Humans {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get firstName() {
    return this._firstName;
  }
  calcAge() {
    return 2037 - this.age;
  }
}

const nitish = new Humans('Nitish', 1999);
console.log(nitish.calcAge());
console.log(`First Name Before Setting: ${nitish.firstName}`);
nitish.firstName = 'Nitish Kumar Yadav';
console.log(`First Name After Setting: ${nitish.firstName}`);

// *************************Object.create()**************************************

const PersonProto = {
  calcAge() {
    return 2037 - this.age;
  },

  init(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  },
};

const nitish2 = Object.create(PersonProto);
nitish2.init('Nitish', 1999);
console.log(`Using Object.create(): ${nitish2.calcAge()}`);
console.log(nitish2);

//*********************Coding Challenge 2 & 3 *********************************

//*******************Challenge 2 **************************
class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`Accelerated Speed: ${this.speed}`);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`Reduced Speed: ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    this.speed *= 1.6;
  }
}

const porshe = new CarClass('Porshe', 200);
porshe.accelerate();
porshe.brake();
console.log(porshe.speedUS);
porshe.speedUS = 300;
porshe.accelerate();
porshe.brake();
console.log(porshe.speedUS);

//***************Challenge 3 ************************

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/hr, with a charge of ${this.charge}%`
  );
};
ElectricCar.prototype.constructor = ElectricCar;
const tesla = new ElectricCar('Tesla', 120, 50);
tesla.chargeBattery(100);
tesla.accelerate();
