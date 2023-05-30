`Polymorphism:
Polymorphism allows objects of different classes to
be treated as instances of a common parent class.
This provides flexibility and extensibility in your code.
Here's an example:`;

class Shape {
  calculateArea() {
    //Placeholder method
  };
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height)  {
        super();  //This line invokes the constructor of the superclass (Shape), allowing the Rectangle class to initialize any inherited properties.
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];

    shapes.forEach(shape => {
        console.log(shape.calculateArea());
    });