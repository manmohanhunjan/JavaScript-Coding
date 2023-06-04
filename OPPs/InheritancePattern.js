function Animal(name) {  // Animal is a super class
    const animal = {};  // creating an empty object
    animal.name = name; // adding name property to empty object

    animal.eat = function () {  // adding eat method to empty object
        console.log(`${this.name} is eating`);  // this keyword refers to the object which is calling the method
    };

    return animal; // returning the object
}

function Dog(name) { // Dog is a sub class
    const dog = Animal(name); // creating an object using Animal constructor function

    dog.bark = function (){ // adding bark method to dog object
        console.log(`${this.name} is barking`); // this keyword refers to the object which is calling the method
    }; 

    return dog;
}

const dog = Dog("Bobby"); // creating an object using Dog constructor function
dog.eat(); // calling eat method
dog.bark();