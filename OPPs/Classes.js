// Creating a class representing a person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating objects from the class
  const person1 = new Person('John', 30);
  const person2 = new Person('Jane', 25);
  
  person1.greet(); // Output: Hello, my name is John and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
  