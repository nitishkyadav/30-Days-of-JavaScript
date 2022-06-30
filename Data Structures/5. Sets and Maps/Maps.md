## Maps In JS

1.  Maps is one of the most used data structure.
2.  It stores data / properties in the form of key value pair. It's kind of similar to Objects in JS but in Maps, the key can be alphanumeric, boolean, object or even map. While in Objects, key must be of type _String_.
3.  For most of the part, maps have methods as we have discussed in the Sets.

        Example 1:

            const person1 = new Map();
            person1.set("Name", "Nitish");
            person1.set("Qualification", "Graduate in CS");
            person1.set("Proficient In", ["Java, HTML, CSS, JavaScript"]);
            console.log(person1.get("Name"));
            console.log(person1.get("Qualification"));
            console.log(person1.get("Proficient In"));


        Output:

            Nitish
            Graduate in CS
            ['Java, HTML, CSS, JavaScript']

4.  Keys can be deleted from Maps using .delete().

        Example 2:

            const person1 = new Map();
            person1.set("Name", "Nitish");
            person1.set("Qualification", "Graduate in CS");
            person1.set("Proficient In", ["Java, HTML, CSS, JavaScript"]);
            console.log(person1.get("Name"));
            console.log(person1.get("Qualification"));
            console.log(person1.get("Proficient In"));
            console.log(person1.delete("Qualification"));

         Output:

            Nitish
            Graduate in CS
            ['Java, HTML, CSS, JavaScript']
            true

5.  We can use DOM elements as key to map to objects.

        Example 2:

            const person1 = new Map();
            person1.set("Name", "Nitish");
            person1.set("Qualification", "Graduate in CS");
            person1.set("Proficient In", ["Java, HTML, CSS, JavaScript"]);
            person1.set(document.querySelector("h1"), "Hi from browser");
            console.log(person1);

        Output:

            {'Name' => 'Nitish', 'Qualification' => 'Graduate in CS', 'Proficient In' => Array(1), h1 => 'Hi from browser'}

        Here the key will point to *h1* element in the HTML.

6.  We can create map by passing 2D array as argument in Map.

        Example 3:

            const person2 = new Map([
                ["Name", "Subrat"],
                ["Qualification:", "Graduate in CS"],
                ["Proficient In", ["Java, HTML, CSS, JavaScript"]]
            ]);
            console.log(person2);

        This will log all the key, values in the console.

7.  We can convert Objects into Maps using Object.entries("MapName") within new Map().

        Example 4:

            const openingHours= {
            Mon:{
                open: 0,
                close: 23;
                }
            };

            const openingHoursMap = new Map(Object.entries(openingHours));

        Output:

            Map(1) {'Mon' => {…}}
            [[Entries]]
            0: {"Mon" => Object}
            key: "Mon"
            value: {open: 0, close: 23}
            size: 1
            [[Prototype]]: Map

8.  In Maps, we can use for-of loop to iterate over Map and can use destructuring to store keys and values as variables.

        Example 5:

            const person1 = new Map();
            person1.set("Name", "Nitish");
            person1.set("Qualification", "Graduate in CS");
            person1.set("Proficient In", ["Java, HTML, CSS, JavaScript"]);

        Output:

            Name : Nitish
            Qualification : Graduate in CS
            Proficient In : Java, HTML, CSS, JavaScript
