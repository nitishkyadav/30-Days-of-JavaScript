// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (array1, array2) {
  const juliaCopy = array1.slice(1, 3);
  const combined = [...juliaCopy, ...array2];

  combined.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs(julia, kate);

///////////////////////////////////////// Coding Challenge 2 //////////////////////////////////////////////////

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const td1 = [5, 2, 4, 1, 15, 8, 3];
const td2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (age) {
  const ageOfDogs = age.map(function (ele) {
    if (ele <= 2) {
      return ele * 2;
    } else {
      return ele * 4 + 16;
    }
  });
  console.log(ageOfDogs);
  const filter = ageOfDogs.filter((arr) => arr >= 18);
  console.log(filter);

  const reduce1 =
    filter.reduce(function (acc, ele) {
      return (acc += ele);
    }, 0) / filter.length;
  console.log(reduce1);

  return reduce1;
};

console.log(calcAverageHumanAge(td2));

// Coding CHallenge 3
// Rewrite Coding Challange 2 as Arrow Function along with chaining

// const td1 = [5, 2, 4, 1, 15, 8, 3];
// const td2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge1 = function (age) {
  const avgDogAge = age
    .map((ele) => (ele <= 2 ? ele * 2 : ele * 4 + 16))
    .filter((arr) => arr >= 18)
    .reduce((ace, ele, i, arr) => ace + ele / arr.length, 0);
  console.log(avgDogAge);
  return avgDogAge;
};
console.log(calcAverageHumanAge1(td1));
console.log(calcAverageHumanAge1(td2));

// Coding Challenge

const var1 = 5;
console.log(var1);

const users = [
  { firstName: "akshay", lastName: "Saini", age: 27 },
  { firstName: "Deepika", lastName: "Padukone", age: 27 },
  {
    firstName: "Sher",
    lastName: "Bahadur",
    age: 49,
  },
  { firstName: "Nitish", lastName: "Yadav", age: 23 },
];

const display = users.reduce(function (acc, ele, i, arr) {
  if (acc[ele.age]) {
    acc[ele.age] = ++acc[ele.age];
  } else {
    acc[ele.age] = 1;
  }
  return acc;
}, {});
console.log(display);

// Coding Challenge

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.

dogs.forEach(
  (cur) => (cur.recommendedFoodPortion = Math.trunc(cur.weight ** 0.75 * 28))
);

console.log(dogs);

////////////////////////////////////////////////// 2. //////////////////////////////////////////////////
dogs.forEach(function (curr) {
  if (curr.owners.includes("Sarah")) {
    if (
      Number(curr.curFood) >
      Number(curr.recommendedFoodPortion) +
        0.1 * Number(curr.recommendedFoodPortion)
    ) {
      console.log("Sarah's dog is eating too much");
    } else if (
      Number(curr.curFood) <
      Number(curr.recommendedFoodPortion) -
        0.1 * Number(curr.recommendedFoodPortion)
    ) {
      console.log("Sarah's dog is eating too less");
    } else {
      console.log("Sarah's dog is eating fine");
    }
  }
});

///////////////////////////////////////////////// 3 //////////////////////////////////////////
const { ownersEatToMuch, ownersEatTooLess } = dogs.reduce(
  function (acc, curr) {
    if (curr.curFood > curr.recommendedFoodPortion) {
      // console.log(1);
      acc.ownersEatToMuch.push(curr.owners);
    } else if (curr.curFood < curr.recommendedFoodPortion) {
      // console.log(2);
      acc.ownersEatTooLess.push(curr.owners);
    }
    return acc;
  },
  { ownersEatToMuch: new Array(), ownersEatTooLess: new Array() }
);

console.log(ownersEatToMuch, ownersEatTooLess.flat());

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// ownersEatToMuch.join(" and ");
console.log(
  `${ownersEatTooLess
    .flat()
    .join(" and ")}'s dogs eat too less!!! and ${ownersEatToMuch
    .flat()
    .join(" and ")}'s dog eat too much!!!`
);
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

// dogs.forEach((cur) => (cur.recommendedFoodPortion = cur.weight * 0.75 * 28));
// if (
//   dogs.some((cur) => Number(cur.recommendedFoodPortion) === Number(cur.curFood))
// ) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Better Approach
console.log(dogs.some((cur) => cur.recommendedFoodPortion === cur.curFood));
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// if (
//   dogs.some((cur) => {
//     Number(cur.curFood) <= Number(cur.recommendedFoodPortion) * 1.1 &&
//       Number(cur.curFood) >= Number(cur.recommendedFoodPortion) * 0.9;
//   })
// ) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Better Approach

console.log(
  dogs.some(
    (cur) =>
      cur.curFood < cur.recommendedFoodPortion * 1.1 &&
      cur.curFood > cur.recommendedFoodPortion * 0.9
  )
);
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

console.log(
  dogs.filter(
    (cur) =>
      cur.curFood < cur.recommendedFoodPortion * 1.1 &&
      cur.curFood > cur.recommendedFoodPortion * 0.9
  )
);
// console.log("Dogs eating Ok: " + dogsEatingOk);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
console.log(dogs);
const copy = dogs
  .slice()
  .sort((a, b) => a.recommendedFoodPortion - b.recommendedFoodPortion);

console.log(copy);
