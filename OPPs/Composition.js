`Composition: 
Composition involves building complex objects by combining
simpler objects or components. It allows for code reuse 
and flexibility. Here's an example:`

class Engine {
    start(){
        console.log('Engine started.');
    }
}

class Wheels {
    rotate() {
        console.log('Wheels rotating.');
    }
}

class Car{
    constructor() {
        this.engine = new Engine();
        this.wheels = new Wheels();
    }
    
    startCar() {
        this.engine.start();
        this.wheels.rotate();
        console.log('Car started.');
    }
}

const car = new Car();
car.startCar();