"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Total Deposits
const totalDeposit = accounts
  .flatMap((ele) => ele.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, ele) => acc + ele, 0);

console.log(totalDeposit);

// 02. get movement>=1000
const moreThan1000 = accounts
  .flatMap((ele) => ele.movements)
  .filter((mov) => mov >= 1000).length;

console.log(moreThan1000);

// Using Reduce method
const moreThan10002 = accounts
  .flatMap((ele) => ele.movements)
  .reduce((count, ele) => (ele >= 1000 ? ++count : count), 0);

console.log(moreThan10002);

// 3. Get sum of deposits and withdrawls

const { deposits, withdrawls } = accounts
  .flatMap((ele) => ele.movements)
  .reduce(
    function (sum, ele) {
      if (ele > 0) {
        sum.deposits += ele;
      } else {
        sum.withdrawls += ele;
      }
      return sum;
    },
    { deposits: 0, withdrawls: 0 }
  );

// console.log(sums);
console.log(deposits, withdrawls);

const title1 = "this is a nice title";

function convertTitleCase(title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  //   const title = "this is a nice title";
  const exceptions = ["a", "an", "the", "with", "at", "of", "includes", "and"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((curr) =>
      exceptions.includes(curr)
        ? curr
        : curr.slice(0, 1).toUpperCase() + curr.slice(1).toLowerCase()
    )
    .join(" ");
  return capitalize(titleCase);
}

const title = convertTitleCase("i am nitish");
console.log(title);
console.log(convertTitleCase(title1));
console.log(convertTitleCase("and here i am i"));
