## Spread Operator in JS

1.  Spread Operator(...) was introduced with ES6.
2.  Spread Operator(...) is used in place where we have to write values, seperated by commas.
3.  Spread Operator(...) expands the array into individaul element which can be used to create new Arrays or can be passed to functions.

    For Example:
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
