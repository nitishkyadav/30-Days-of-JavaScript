// This script is just for reference. There might be slight changes in variable and functions name
// respect to .md file to avoid syntex errors

// Example 1:
console.log('Example 1:');

const arr1 = [10, 20, 30, 40, 50];
const arr2 = [0, ...arr1, 60, 70];
console.log(arr2);

//Example 2:
console.log('Example 2:');

const [x, y, ...others] = arr1;
console.log(x, y, others);

//Example 3:
console.log('Example 3:');

const [xx, , yy, ...others1] = [...arr1, ...arr2];
console.log(x, y, others1);

//Example 5 and 6:
// Example 5
console.log('Example 5:');

const display = function (...arr) {
  console.log(arr);
};
display(10, 20, 30, 40, 50);

//Example 6:
console.log('Example 6:');

display(10, 20, 30, 40);
display(...arr1);

// Example 7: Rest Pattern in Objects

console.log('Example 7:');

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

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
