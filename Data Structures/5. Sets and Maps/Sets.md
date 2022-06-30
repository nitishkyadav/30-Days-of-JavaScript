## Sets In JS

1.  Sets were introduced in JS with ES6.
2.  Sets is just like array but with the distinctions that it stores unique values and values cannot be directly accessed from Sets like in Array.
3.  In Sets, elements are stored in random order that's why we cannot access elements from it with indexes.
4.  Syntex to create Sets are:

    Example 1: Creating Set using .add() function

        const set1= new Set();
        set1.add("Hi");
        set1.add("browser");

    Example 2: Creating Array by passing Array as argument during declaration.

        const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
        console.log(set2);

5.  In Sets, whenever we add an element, it returns the whole Set.

    Example 3:

        const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
        console.log(set2.add("Aparna"));

    Output:

        Set(4) {'Nitish', 'Mahesh', 'Suresh', 'Aparna'}

    Since it returns the whole set, we can use .add() multiple times in the same line

    Example 4:

        const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
        console.log(set2.add("Aparna").add("Subrat").add("Sanjit"));

    Output:

        Set(6) {'Nitish', 'Mahesh', 'Suresh', 'Aparna', 'Subrat', …}
        [[Entries]]
        0: "Nitish"
        1: "Mahesh"
        2: "Suresh"
        3: "Aparna"
        4: "Subrat"
        5: "Sanjit"

6.  To get size of Set, there is inbuilt method within JS called _size_.
    It returns the size of set.

        Example 5:

            const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
            console.log("Size of Set is: "+set2.size);

        Output:

            3

7.  We can use destructuring , spread operator and rest pattern on Sets.

        Example 6:

            const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
            const [firstName, ...names] =[...set2];
            console.log(firstName, names);

        Output:

            Nitish, [Mahesh, Suresh]

8.  To check whether an element is present in set, we have _has()_ method. We pass the value which we are searching and if it exists, we get true else false.

9.  To delete element from Set, there is _.delete()_ method which returns _true_ if element is deleted successfully otherwise returns false.

        Example 7:

            const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
            console.log(set2);
            console.log(set2.has("Nitish"));
            console.log(set2.delete("Nitish"));
            console.log(set2.delete("xyz"));
            console.log(set2.has("Nitish"));

        Output:

            Set(6) {'Nitish', 'Mahesh', 'Suresh'}
            true
            true
            false
            false

10. We can iterate over Sets using for/ for-of loop

        Example 8:

            const set2 = new Set(["Nitish", "Nitish", "Mahesh", "Suresh", "Nitish"]);
            console.log(set2);
            for(const name of set2.enteries())
            {
                console.log(name);
            }
