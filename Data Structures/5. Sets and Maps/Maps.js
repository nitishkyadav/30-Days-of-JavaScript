// Example 1:

const person1 = new Map();
person1.set("Name", "Nitish");
person1.set("Qualification", "Graduate in CS");
person1.set("Proficient In", ["Java, HTML, CSS, JavaScript"]);
console.log(person1.get("Name"));
console.log(person1.get("Qualification"));
console.log(person1.get("Proficient In"));

// Storing using DOM element as key to store values
person1.set(document.querySelector("h1"), "Hi from browser");
console.log(person1);

// Creating Maps using 2D Array as argument
const person2 = new Map([
  ["Name", "Subrat"],
  ["Qualification:", "Graduate in CS"],
  ["Proficient In", ["Java, HTML, CSS, JavaScript"]],
]);
console.log(person2);

// Converting Object to Map

const openingHours = {
  Mon: {
    open: 0,
    close: 23,
  },
};

// Example 5:
const openingHoursMap = new Map(Object.entries(openingHours));
console.log(openingHoursMap);

console.log([...openingHoursMap.values()]);

for (const [index, property] of person1) {
  console.log(`${index} : ${property}`);
}
