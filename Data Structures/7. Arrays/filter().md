## Filter in Array

1.  Just like map(), filter() is also a higher order function which is used on existing Array to filter out and return the results as a brand new array which can be stored for further operations.

2.  It takes callback function to filter the results from array based upon some logic.

3.  The callback function have access to same no. of parameters as the filter method i.e

    a. Current Element
    b. Index of Array
    c. The whole Array

4.  Example of .filter method is

         const numbers=[10, 20, 30, 40, 50];
         const filteredArray= numbers.filter(function(currentElement, index, arr){
         return currentElement>30;
         })
         console.log(filteredArray);

    Output:

         [40 ,50]

5.  The above code can also be written using arrow function

    Example:

        const numbers=[10, 20, 30, 40, 50];
        const filteredArray=numbers.filter((currentElement,index, arr)=> currentElement>30);
        console.log(filteredArray);

    Output:

        [40, 50]
