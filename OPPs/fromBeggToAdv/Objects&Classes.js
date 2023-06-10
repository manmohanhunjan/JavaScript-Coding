`Objects are basic building blocks of a JavaScript program.
Objects are used to store keyed collections of various data and more complex entities.
An object can be created with figure brackets {…} with an optional list of properties.
A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key.
It's easy to find a file by its name or add/remove a file.
The value can be of any type. Let's add a boolean one:`

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

// To remove a property, we can use delete operator:

delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user1 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// Computed properties
// We can use square brackets in an object literal. That’s called computed properties.
//what is object literal? 
//Object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
// So, if a visitor enters "apple", bag will become {apple: 5}.
// Essentially, that works the same as:

let fruit1 = prompt("Which fruit to buy?", "apple");
let bag1 = {};
// take property name from the fruit variable
bag1[fruit1] = 5;

// Property value shorthand
// In real code we often use existing variables as values for property names.

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user2 = makeUser("John", 30);
alert(user2.name); // John

// In the example above, properties have the same names as variables. 
//The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

// Instead of name:name we can just write name, like this:

function makeUser1(name, age) {
    return {
        name, // same as name:name
        age,  // same as age:age
        // ...
    };
}

// Existence check, “in” operator
// Sometimes we need to set a property only if it doesn’t exist.
// There’s a special operator "in" for that.
// The syntax is:

// "key" in object

// For instance:

let user3 = {};
alert(user3.noSuchProperty === undefined); // true means "no such property"

// There’s also a special method obj.hasOwnProperty(key) that returns true if the object has the property key,
