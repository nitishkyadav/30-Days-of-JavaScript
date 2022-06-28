## Short Circuiting In JS

1. In JS, we can use Logical AND(&&) and Logical OR(||) to run the code based upon the conditions whether they are true or false.

2. We can use logical operators in JS with all data types.
3. It is based upon the concept of _truth_ and _falsey_ values. Every data type returns boolean value if placed within if-else block.
4. There are 4 falsy values in JS. These are _undefined, null, 0, false, "", NaN_

### a. Use of Logical OR(||) Operator

1.  Logical Operator(||) checks untill it finds _truthy_ value in the expression and if it finds it, it returns that value.

    Example 1:

        const values = null || undefined || "" || NaN || "Suraj" || 1;
        console.log(values);
        console.log(null || undefined || 0 || NaN || true || "Suraj" || 1);

    Output:

        Suraj
        true

    So, in Example 1, for values, the JS Engine checked for first _truth_ value and it found it for "Suraj". As soon as it encountered truthy value, it returned it and saved it to values.

    Example 2: When all the expressions are false

        console.log(null || undefined || NaN);

    Output:

        NaN

    In case, when all the expressions are falsy in logical OR, it will return the last falsy value.

### b. Use of Logical AND(&&) Operator

1.  Logical AND(&&) checks for _truthy_ value and if all the values are truthy then it returns the last truthy value.

    Example 3: When all are _truthy_ values

        console.log(1 && true && "Suraj" && 10 && 121);

    Output:

        121

2.  If there is even a single value which is _falsy_ it will stop the execution and return first falsy value.

    Example 4: When there is mix of truth and falsy value

        console.log(1 && 1 && 0 && null && 10 && false);

    Output:

        0

So Logical And(&&) and Logical OR(||) can be used in place of if-else block but they can make our code a little bit of messy and unreadable.

### c. The Nullish Coalescing Operator(??)

1.  Nullish Coalescing Operator is kind of extension of Logical OR(||) but it doesn't consider _0 and empty string("")_ as falsy values.

    Example 5:

        const values = null ?? undefined ?? "" ?? NaN ?? "Suraj" ?? 1;
        console.log(values);
        console.log(null ?? undefined ?? 0 ?? NaN ?? true ?? "Suraj" ?? 1);

    Output:

        *Empty String*
        0

    Example 5 and example 1 are same but instead of using (||) we are using (??) and we are getting different outputs because _Nullish Coalescing_ operator treats _0 and Empty String("") as truthy values_.

2.  It can be used with any data type and functions.

### d. Optional Chaining(?)

1.  Optional Chaining(?) was introduced with ES2020 along with Nullish Coaleascing Operator(?) which checks if certain property, object exists.
2.  If the certain property, variable, object exists it proceeds further, otherwise it immediately returns _undefined_

    _Example 6:_

            const openingHours= {
                Mon:{
                    open: 0,
                    close: 23;
                }
            };

            console.log(openingHours.Mon?.open);
            console.log(openingHours.Mon.open);
            console.log(openingHours.Tue?.open);
            console.log(openingHours.Tue.open);

    _Output:_

        12
        12
        undefined

    _Error Message_

        *Uncaught TypeError: Cannot read properties of undefined (reading 'open')*

    -> Here in first console.log(), it will check whether _Mon_ exists or no. Since it existed it printed the value of _Mon?.open_

    -> In 2nd console.log(), it directly accessed _Mon.open_. Since it was available, it printed it's value.

    -> In 3rd console.log(), it checked whether _Tue_ exists. Since it doesn't exist, it returned _undfined_ and will not check for _.open_.

    -> In 4th console.log(), it will check for whole _Tue.open_. Since _Tue_ doesn't exist therefore it's _undefined_ and we are trying to access the property for _undefined_ we will get _TypeError_
