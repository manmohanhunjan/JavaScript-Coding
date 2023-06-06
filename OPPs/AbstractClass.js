class Vehicle { // Abstract class
    constructor(){  // Abstract method
        if(new.target === Vehicle){ // new.target is a meta property that returns a reference to the constructor or class that was invoked by new.
            throw  new Error('Cannot instantiate directly.');   // If the constructor is called without new, an error is thrown.
        }
    }

    start(){    // Abstract method
        throw new Error('Method not implemented.');     // If the method is not implemented, an error is thrown.
    }
}

class Car extends Vehicle{ // Concrete class
    start(){    // Concrete method
        console.log('Car started'); // Car started
    }
}

const vehicle = new Vehicle(); // Error: Cannot instantiate directly.
const car = new Car();
car.start(); // Car started