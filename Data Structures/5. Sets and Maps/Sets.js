"use strict";

const set1 = new Set();
const temp = set1.add("Hi");
console.log(set1.add(2));

console.log(set1);

// const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
// console.log(set2);

// for adding into Set and checking the return type whenever the .add() function is used and chaining of add
const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
console.log(set2.add("Aparna"));
console.log(set2.add("Aparna").add("Subrat").add("Sanjit"));

// for destructuring, spread operator, rest pattern
const [firstName, ...names] = [...set2];
console.log(firstName, names);

// for has and delete
console.log(set2);
console.log(set2.has("Nitish"));
console.log(set2.delete("Nitish"));
console.log(set2.delete("xyz"));
console.log(set2.has("Nitish"));

// console.log(set2);
for (const name of set2) {
  console.log(name);
}
