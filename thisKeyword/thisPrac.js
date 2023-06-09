// Objective: Practice using the this keyword
        const person = {
            name: 'John',
            age: '30',
            greet: function(){
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
            }
        };

        person.greet();


//2nd example with constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}

const john = new Person('John', 30);
john.greet(); 
