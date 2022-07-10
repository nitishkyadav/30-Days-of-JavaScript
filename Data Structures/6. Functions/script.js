"use strict";

// Returning function from function
const greet = (greeting) => {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet("Hey")("Nitish");

// Borrowing function from Object using Call, Apply and Bind

// Objects
const name1 = {
  firstName: "Nitish",
  lastName: "Yadav",
  printFullName(district, state) {
    console.log(
      `${this.firstName} ${this.lastName} from ${district} , ${state}`
    );
  },
};

const name2 = {
  firstName: "Kamini",
  lastName: "Yadav",
};
function printFullName(district, state) {
  console.log(`${this.firstName} ${this.lastName} from ${district} , ${state}`);
}

const states = ["Ludhiana", "Punjab"];
name1.printFullName.call(name1, ...states);
name1.printFullName.call(name2, ...states);
name1.printFullName.apply(name1, states);
name1.printFullName.apply(name2, states);

// Accessing outside created fn. on object using call and apply
printFullName.call(name1, ...states);
printFullName.call(name2, ...states);

printFullName.apply(name1, states);
printFullName.apply(name2, states);

// Using .bind() method

const nameNitish = printFullName.bind(name1);
nameNitish(...states);

const nameKamini = printFullName.bind(name2);
nameKamini(...states);

const nameNitishCopy = printFullName.bind(name1, "Ludhiana");
nameNitishCopy("Punjab");

const nameKaminiCopy = printFullName.bind(name2, "Ludhiana");
nameKaminiCopy("Punjab");
