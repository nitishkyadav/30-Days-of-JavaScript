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

//Object Destructuring
let { mainMenu, name: Place_Name } = restaurant;
console.log(mainMenu, name);
