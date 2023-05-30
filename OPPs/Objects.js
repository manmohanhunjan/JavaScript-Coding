// Creating an object representing a person
const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  // Accessing object properties
  console.log(person.name); // Output: John
  
  // Invoking object methods
  person.greet(); // Output: Hello, my name is John and I am 30 years old.
  