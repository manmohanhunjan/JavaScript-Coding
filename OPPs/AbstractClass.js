`Abstract Class: An abstract class is a class that is declared abstract 
— it may or may not include abstract methods. Abstract classes cannot be
 instantiated, but they can be subclassed.`;

 `Abstract Method: An abstract method is a method that is declared without
 an implementation (without braces, and followed by a semicolon), like this:
 abstract void moveTo(double deltaX, double deltaY); If a class includes
 abstract methods, then the class itself must be declared abstract, as in:
 public abstract class GraphicObject { // declare fields // declare non-abstract methods abstract void draw(); }
    When an abstract class is subclassed, the subclass usually provides
    implementations for all of the abstract methods in its parent class.
    However, if it does not, then the subclass must also be declared abstract.`;


class Vehicle {
  // Abstract class
  constructor() {
    // Abstract method
    if (new.target === Vehicle) {
      // new.target is a meta property that returns a reference to the constructor or class that was invoked by new.
      throw new Error("Cannot instantiate directly."); // If the constructor is called without new, an error is thrown.
    }
  }

  start() {
    // Abstract method
    throw new Error("Method not implemented."); // If the method is not implemented, an error is thrown.
  }
}

class Car extends Vehicle {
  // Concrete class
  start() {
    // Concrete method
    console.log("Car started"); // Car started
  }
}

const vehicle = new Vehicle(); // Error: Cannot instantiate directly.
const car = new Car();
car.start(); // Car started
