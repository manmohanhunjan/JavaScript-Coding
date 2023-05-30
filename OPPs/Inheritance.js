//Creating a parent class
class Animal {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating.`);
    }
}

//Creating a child class that inherits from the parent class
class Dog extends Animal {
    bark(){
        console.log(`${this.name} is barking.`);
    }
}

//Creating objects from the classes
const animal = new Animal('Generic Animal');
const dog = new Dog('Bobby');

animal.eat();
dog.eat();
dog.bark();
