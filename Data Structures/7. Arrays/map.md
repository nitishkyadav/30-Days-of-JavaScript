## Map, Filter and Reduce

Map, Filter and Reduce are higher order functions which performs some action on array data and create a new array most of the time based upon the callback function.

### a. .map()

1.  .map() is used to transform a given array based upon the callback function which gives us a brand new array.

2.  .map() method iterates over the array one by one and performs the action and stores the value into variable.

3.  Syntax of using .map() is

    Example 1:

        const numbers=[10,20,30,40,50];
        const doubleTheNumbers=numbers.map(function(ele){
            return 2*ele;
        })
        console.log(doubleTheNumbers);

    Output:

        20, 40, 60, 80, 100

    Here based upon the callback fn. the initial array values are doubled and then it's stored in a new array.

4.  The above example can be demonstrated using array function

    Example 2

        const numbers=[10,20,30,40,50];
        const doubleTheNumbers=numbers.map(ele=>2*ele);
        console.log(doubleTheNumbers);

    Output:

        20, 40, 60, 80, 100

    Here, we used arrow fn. and if there is only one liner arrow function then by default it's returning some value which can be stored into variable.

5.  The callback function in .map() have access to 3 properties i.e current element, current index and the array itself.

    Example 3

        const numbers=[10,20,30, 40, 50];
        const doubleTheNumbers=numbers.map(function(ele,index,arr){
            return------
        });

    Here, ele is current element from array
    index -> current index
    arr -> current array on which action is performed.

6.  The operation performed on the above array can also be done with the help of for() loop.

    Example 4:

        const numbers=[10, 20, 30, 40, 50];
        const doubleTheNumbers=[];
        for(let i=0; i<numbers.length;i++){
            let tempDouble=2*numbers[i];
            doubleTheNumbers.push(tempDouble);
        }
        console.log(doubleTheNumbers);

    Output:

        20, 40, 60, 80, 100

7.  The main advantage of using .map() is that it can be easily chained with other array methods which can reduce the code length.
