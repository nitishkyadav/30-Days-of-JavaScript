[Link to Source File](script.js)

## Rest Pattern in JS

### Rest Pattern for Arrays

1.  Rest Pattern(...) is just opposite of spread operator.
2.  Spread operator unpacks the array into individual elements but Rest Pattern clubs the individual array elements / object properties into array or object.

    Example 1:

        const arr1 = [10, 20, 30, 40, 50];
        const arr2 = [0, ...arr1, 60, 70];
        console.log(arr2);

    Output

        [0, 10, 20, 30, 40, 50, 60, 70]

    In above example, we used spread operator(...) to create a new array "arr2" from "arr1"

    Example 2: Using Rest Pattern to pack variables into array and storing it in a variable

        const arr1 = [10, 20, 30, 40, 50];
        const [x, y, ...others] = arr1;
        console.log(x, y, others);

    Output:

        10, 20, [30, 40, 50]

    Here, we destructured the array "arr1" and stored the values into x , y as per array's respective indexes. But, when JS Engine runs ...others, it packs all the values after "y" into array and maps it to "others" variable.

    Example 3: Using Rest Pattern(...) and Spread Operator(...) together

        const arr1 = [10, 20, 30, 40];
        const arr2 = [50, 60, 70, 80];
        const [x, ,y, ...others] = [...arr1, ...arr2];
        console.log(x, y, others);

    Output:

        10, 30, [40, 50, 60, 70, 80]

    In Example 3, we created 2 arrays "arr1" and "arr2" and using spread operator, we created a new big array which we destructured to store values in x, y and others. x and y stored the values as per their position within the array and (...others) used rest pattern to pack all the values after variable y as an array and assign it to "others" variable.

3.  Spread Operator is used on the right side of the assignment operator whereas Rest Pattern is used to the left side of assignment operator.

    Example 4:

        const arr1 = [10, 20, 30];
        const arr2 = [...arr1, 40, 50];
        console.log(arr1, arr2);
        <!-- Using Spread operator(...) on right side of assignment operator to create a new array -->

        const [x, , y, ...others ]= arr2;
        console.log(x, y, others);
        <!-- Using Rest Pattern on the left side of the assignment operator -->

4.  In case of functions, we use Rest Pattern as Parameter in function. That's why it's called Rest Parameter when used in function.

    Example 5:

        const display = function(...arr){
            console.log(arr);
        }

        display(10, 20, 30, 40);

    Output:

        [10, 20, 30, 40]

    In Example 5, (...arr) packs all the variables passed to display() into array and then prints it.

5.  Spread Operator is used as Argument during function call/invocation. It unpacks the array into single - single variables.

    Example 6:

         const display = function(...arr){
            console.log(arr);
        }

        const arr1=[10, 20, 30, 40];
        display(10, 20, 30, 40);
        display(...arr1);

    Output:

        [10, 20, 30, 40]
        [10, 20, 30, 40]

    In Example 6, when we call function with display(...arr1) then, ...arr1 breaks the array into individual values and JS Engine will read the function call like below:

        display(10, 20, 30, 40);

    Then during function declaration we used (.arr) in display = function(.arr). So here ...arr in function will club the argument variables (10, 20, 30, 40) as [10, 20, 30, 40];
    That's why, we get same output in Example 6.

### Rest Pattern in Objects

6.  Rest Pattern in Objects work as same as Rest Pattern For Arrays.

    Example 7: Rest Pattern in Objects

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

        const {sat, ...weekdays} = restaurant.openingHours;
        console.log(sat, weekdays);

    Output:

        {open: 0, close: 24},
        thu:{open: 12, close: 12} , fri: {open: 11, close: 23}
