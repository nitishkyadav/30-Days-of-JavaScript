'use strict';
const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
};

Person.prototype.random = function () {
  console.log(this);
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.age);
};

const jonas = new Person('Jonas', 1980);
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

// ***************************************************************************************************
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

// ****************************************************************************************************
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
// *** Example of Inheritance of Constructors using Object.create and Parent.call(this,x,y...) method***
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

// *****************************************************************************************************
//***** Inheritance b/w ES6 Classes Using extend keyword and super() *****
// **** Using Humans Class as Parent for Inheritance ****

class student extends Humans {
  constructor(firstName, age, course) {
    super(firstName, age);
    this.course = course;
  }

  intro() {
    console.log(
      `Hi!!! I am ${this._firstName} and I am doing Bachelors in ${this.course}`
    );
  }
}

const kamini = new student('Kamini Yadav', 18, 'Medical');
kamini.calcAge();
kamini.intro();

// Special Case -> When there is no additional Parameter in child Class
class studentSC extends Humans {
  intro() {
    console.log(`Hi!!! I am ${this._firstName} and I am doing Bachelors.`);
  }
}

const shivam = new studentSC('Shivam Kumar', 1999);
shivam.calcAge();
shivam.intro();

// ************************************************************************************************
// ****** Implementing Inheritance Using Object.create() ******
// Using PersonProto Object From Top

const StudentOc = Object.create(PersonProto);
StudentOc.init = function (firstName, age, course) {
  PersonProto.init.call(this, firstName, age);
  this.course = course;
};
StudentOc.intro = function () {
  console.log(
    `Hi!!! I am ${this.firstName} and I am doing Bachelors in ${this.course}`
  );
};

const nitishOc = Object.create(StudentOc);
nitishOc.init('Nitish', 1999, 'Computer Science');
nitishOc.intro();

// ********************************** Coding Challenge *************************************************
//        ***** Implementing Inheritance Using Classes, Private variables and method chaining *****

class carCl {
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
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    this.speed *= 1.6;
  }
}

class EvCl extends carCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/hr, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EvCl('Rivian', 120, 23);

rivian
  .brake()
  .accelerate()
  .brake()
  .brake()
  .chargeBattery(50)
  .chargeBattery(55)
  .accelerate()
  .accelerate()
  .accelerate()
  .chargeBattery(80)
  .brake();
