[Link to Source File](script.js)

##i. Array Destructuring

1.  Array Destructuring is used to store Array values into variables 2. To destructure an array we need variables and we wrap those variables in square([]) brackets

    Example 1

    var [l, m, n] = restaurant.categories;
    console.log(l, m, n);

2.  Since Array stores the value in sequential order. So if we want to skip a value. Let's suppose 42 and 64 and store it some other variable using destructuring, we will use commas(,).

    Example 2:

    let arr=[25, 42,98, 64,0,29];
    let [aa, ,bb, ,cc]=arr;
    console.log(aa,bb,cc);

3.  We can easily swap the values of variables kind of using destructuring.

    Example

    [l, m] = [m, l];
    console.log(l, m);

##ii. Object Destructuring

1.  Object Destructuring is part of JavaScript.
2.  It helps to extract and store the values from object into varibles.
3.  The main usage of object destructuring store the parts of API response into variables for further usage.
4.  In objects, the order of key doesn't matter. So we can access any key in any order and store in the variables

    Note: While destructuring objects, the name of variable should be same as of the key from which we are trying to access the value.

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

            let{location, categories}=restaurant;
            console.log(location, categories);

Restaurant is an object. We can store the properties by using destructuring

    Example: storing "location" and "categories" from "restaurant" object

5. We can name the key names by using ":xyz" while storing it into variables

   Example:

   let{location:loc, categories: tags}=restaurant;
   console.log(loc, tags);

6. We can assign default values to keys by using equals(=) operator along with key

   Example:

   let {location:loc=[], categories:= None};
   console.log(loc, categories);

This helps us to assign a default value to the variable for which there might not be key in thebject. This can help us to prevent bugs in the code.

7.  Let's suppose we have declared variables earlier in the program and now the object's key have same name as that of variables, then we have to wrap the whole expression into parenthesis().

    Example:

            let a=24
            let b=43,
            let c="Hi folks."
            const newObject={a:54, b: 29,c:184};
            ({c,b}=newObject);
            console.log(c,b);

    8.  We can also pass object as argument to the function. Since in objects the order of properties doesn't matter we can access object properties when passed to an argument irrespective of it's order.

        Example:

            const demo=function({xx=1, yy=2, zz=3})
            {
                console.log(yy,xx,zz);
            }

            const dummyObject={
                xx: 22, yy:33,zz:44
            };

            demo(dummyObject);

    9.  Destructuring is used a lot in modern JS frameworks and libraries like React and Angular.
