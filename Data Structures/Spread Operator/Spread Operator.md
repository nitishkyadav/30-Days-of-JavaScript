## Spread Operator in JS

1.  Spread Operator(...) was introduced with ES6.
2.  Spread Operator(...) is used in place where we have to write values, seperated by commas.

### Spread Operators In Array

3.  In Array, Spread Operator(...) expands the array into individaul element which can be used to create new Arrays or can be passed to functions.

    Example 1:
    Let's suppose we have an array e.g. arr[] and we want to create a new array using arr[].
    One approach can be using individual elements like arr[0], arr[1]...

        const arr=[1,2,3,4];
        const newArr=[arr[0], arr[1], arr[2], arr[3], 5, 6];
        console.log(newArr);

    This can be easily done using spread operator(...)

        const arr=[1,2,3,4];
        const newArr=[...arr, 5, 6];
        console.log(newArr);

    The output for both code blocks will be exactly same.

    Exammple 2: Using spread operator(...) as argument in function call.

    Let's suppose we have a function which add, let's suppose 2 numbers. One way is to pass arguments one by one as variables like below

        const a=10;
        const b=20;
        const c=30;
        const add=function(a,b,c){
            console.log(a+b+c);
        }

        add(a,b,c);

    Other approach can be to create an array having values which we want to add and then use spread operator(...) to unpack the arr and pass it as argument.

        const sum=[10,20,30];
        const add=function(a,b,c){
            console.log(a+b+c);
        }

        add(...sum);

### Spread Array On Objects

4.  Spread Operator can also be used on Objects. It behaves as it behaves with array.
5.  Spread Operator helps to make shallow copies of objects and arrays. It means whenever we create a new Object/array using spread operator(...) it occupies it's own memory space and have no link to the original object/array.

    Example 3:

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
        const newRestaurant={foundedIn:2022, ...copyOfRestaurant};
        console.log(newRestaurant);

    Example 4: Creating array using properties from object. Please refer "restaurant" object from Example 3

        const menu=[...restaurant.mainMenu, ...restaurant.starterMenu];
        console.log(menu);
