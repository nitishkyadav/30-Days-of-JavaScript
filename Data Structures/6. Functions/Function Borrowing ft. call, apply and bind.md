## Function Borrowing

1.  Function borrowing allows us to use the method of one object on another object without having to maintain/write the code again.
2.  Every function have access to a special variable called _this_. In case when we are using functions within object which is accessing properties of object then _this_ points to that particular object.
3.  But when we have to use method of an object on other object then we have to explicitily make sure that _this_ keyword of the method points to the new Object on which we are going to use the method.
4.  It can be achieved using call(), apply(), bind() methods.
5.  .call() and .apply() method takes atleast _one argument_ which defines that _this_ keyword of method/function is pointing to which object.
6.  _.call_ takes single arguments but _.apply()_ takes arguments as Array.

    Example 1:

        const name1={
        firstName="Nitish",
        lastName="Yadav",
        printFullName(String district, String state)
        {
        console.log(`${this.firstName} ${this.lastName}`);
        };
        };

        const name2={
        firstName="Kamini",
        lastName="Yadav",
        }

        const state=["Ludhiana","Punjab"];
        name1.printFullName.call(name1,...states);
        name1.printFullName.call(name2,...states);

        name1.printFullName.apply(name1, states);
        name1.printFullName.apply(name2, states);

    Here _name1.printFullName.call(name1,[...state])_ and _name1.printFullName.call(name2,[...state])_ points to _name1_ and _name2_ objects respectively and takes arguments as variables.
    But _name1.printFullName.apply(name1, states) and name1.printFullName.apply(name2, states);_ takes arguments as an Array.

7.  We don't need to create method inside an object. We can create a method outside and can use it to point to particular object by specifying the name of object as first argument.

    Example 2: Creating fn. outside and using call() and apply()

        const name1={
        firstName="Nitish",
        lastName="Yadav",
        };

        const name2={
        firstName="Kamini",
        lastName="Yadav",
        }

        function printFullName(district, state) {
        console.log(`${this.firstName} ${this.lastName} from ${district} , ${state}`);
        }

        const states=["Ludhiana","Punjab"];
        printFullName.call(name1,[...states]);
        printFullName.call(name2,[...states]);
        printFullName.apply(name1, states);
        printFullName.apply(name2, states);

    Example 2 gives same output as Example 1
