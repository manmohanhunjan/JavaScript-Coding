class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name} is barking.`);
    }
}

class Cat extends Animal {
    meow(){
        console.log(`${this.name} is meowing.`);
    }
}

const dog = new Dog('Bobby');
dog.eat();
dog.bark();

const cat = new Cat('Kitty');
cat.eat();
cat.meow();