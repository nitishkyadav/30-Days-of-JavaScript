'use strict';

// Demonstrating the use of using Index as well as Spread Operator(...) approach to create arrays
const arr = [1, 2, 3, 4];
const badArr = [arr[0], arr[1], arr[2], arr[3], 5, 6];
const goodArr = [...arr, 5, 6];
console.log(badArr);
console.log(goodArr);

// Calling function by passing values as individual elements vs. using spread operators to pass it as argument

const a = 10;
const b = 20;
const c = 30;
const sum = [10, 20, 30];
const add = function (a, b, c) {
  console.log(a + b + c);
};

add(a, b, c);
add(...sum);

// Demonstrating (...) on objects

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const copyOfRestaurant = { ...restaurant };
copyOfRestaurant.founder = 'Nitish';
console.log(copyOfRestaurant.founder);
console.log(restaurant.founder);

// Creating newRestaurant
const newRestaurant = { foundedIn: 2022, ...copyOfRestaurant };
console.log(newRestaurant);

//Creating new array from objects
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

///
const sum1 = function (...numbers) {
  console.log(numbers);
};

sum1(2, 4, 6);
const xyz = [22, 44, 66];
sum1(...xyz);
