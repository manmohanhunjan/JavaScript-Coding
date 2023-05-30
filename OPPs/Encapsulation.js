function Person(name, age) {
    let _name = name;  // Private variables
    let _age = age;   // Private variables

    // Public method
    this.greet =  function() {
        console.log(`Hello, my name is ${_name} and I am ${_age} years old.`);
    };

    // Getter for private variable _name
    this.getName = function() {
        return _name;
    };

    // Setter for private variable _name
    this.setName = function(newName) {
        _name = newName;
    };
}

const person = new Person('John', 30);
console.log(person.getName()); // Output: John
person.setName('Jane');
person.greet(); // Output: Hello, my name is Jane and I am 30 years old.

