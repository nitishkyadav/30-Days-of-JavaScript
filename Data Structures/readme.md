'use strict';

// Data needed for a later exercise
const flights =
'\_Delayed_Departure;fao93766109;txl2133758440;11:25+\_Arrival;bru0943384722;fao93766109;11:45+\_Delayed_Arrival;hel7439299980;fao93766109;12:05+\_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// Array Destructuring
// 1. Array Destructuring is used to store Array values into variables
// 2. To destructure an array we need variables and we wrap those variables in square([]) brackets
//Example 1
var [l, m, n] = restaurant.categories;
console.log(l, m, n);

// 3. Since Array stores the value in sequential order. So if we want to skip a value  
// let's suppose 42 and 64 and store it some other variable using destructuring, we will use commas(,).
//Example 2:
let arr=[25, 42,98, 64,0,29];
let [aa, ,bb, ,cc]=arr;
console.log(aa,bb,cc);

//

// 4. We can easily swap the values of variables kind of using destructuring.
[l, m] = [m, l];
console.log(l, m);

Object Destructuring
Object Destructuring is part of JavaScript.
It helps to extract and store the values from object into varibles.
The main usage of object destructuring store the parts of API response into variables for further usage.
In objects, the order of key doesn't matter. So we can access any key in any order and store in the variables

Let's take the example of the below code block:

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

restaurant is an object. We can store these
