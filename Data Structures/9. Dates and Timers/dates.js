// Creating date by using constructor
// 1. Displays current time on the console based upon the system including time zone
const date = new Date();
console.log(date);

// 2.
const date2 = new Date("2020, Aug 14, 19:00");
console.log(date2);

// 3.
const date3 = new Date("2020, 14 Aug");
console.log(date3);

const date4 = new Date("14 Aug,2020");
console.log(date4);

const date5 = new Date("Aug 14,2020");
console.log(date5);

const date6 = new Date("15 Aug, 2020");
console.log(date6);

const date7 = new Date(2022, 10);
console.log(date7);

const date8 = new Date(2020, 50);
console.log(date8);

const date9 = new Date(50, 2020);
console.log(date9);

const date10 = new Date(0, 2020);
console.log(date10);

const date11 = new Date(2020, 50, 50);
console.log(date11);

const date12 = new Date("15 Aug, 2020");
console.log(date12);

// Playing with Date
const future = new Date(2027, 10, 15, 15, 45);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(future.getTime()));

console.log(future.setFullYear(2040));
