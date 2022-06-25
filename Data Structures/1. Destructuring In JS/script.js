// Data needed for a later exercise

// Data needed for first part of the section
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

var [l, m, n] = restaurant.categories;
console.log(l, m, n);

let arr = [25, 42, 98, 64, 0, 29];
let [aa, , bb, , cc] = arr;
console.log(aa, bb, cc);

[l, m] = [m, l];
console.log(l, m);

//Object Destructuring and assigning new name to call it
let { mainMenu, name: Place_Name } = restaurant;
console.log(mainMenu, Place_Name);

// Destructuring Nested Objects

let {
  openingHours: { thu, fri },
} = restaurant;
console.log(thu, fri);

let a = 24;
let b = 43;

const newObject = { a: 54, b: 29, c: 184 };
({ a, b } = newObject);
console.log(a, b);

// Passing object to function

const demo = function ({ xx = 1, yy = 2, zz = 3 }) {
  console.log(yy, xx, zz);
};

const dummyObject = {
  xx: 22,
  yy: 33,
  zz: 44,
};

demo(dummyObject);

//Spread operator
const arr1 = ['aaa', 'bbb', 'ccc'];
const arr2 = [9, 8, ...arr1, 7];
console.log(arr2);
