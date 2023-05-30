// Creating a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype of the constructor function
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating objects using the constructor function
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
