`Constructor:  is a special method for creating and initializing an object created within a class.
It is a special type of method which is used to initialize the object.
It is invoked when the object of the class is created.
It is defined inside the class definition.
It is identified by the same name as the class name.
It is used to initialize the instance variables of a class.
It is automatically invoked when the object is created.
It is used to allocate memory to the object.
It does not have any return type.
It can take any number of arguments.
It can be overloaded.
It can be defined in the private section of the class.
It can be defined in the public section of the class.
It can be defined in the protected section of the class.
It can access the static data members of the class.
It can access the instance data members of the class.
It can be inherited.


Syntax:`

class ProductItems{ // class    

    // private properties
    #id = "Hello";
    //We can declare private properties in class using # before the property name.
    // private properties are not accessible outside the class.
    // private properties are accessible inside the class.
    // private properties are not accessible in the child class.
    // private properties are not accessible in the parent class.
    // private properties are not accessible in the object of the class.
    // private properties are not accessible in the static method of the class.

    constructor(title, description, price, qty){    // constructor
        this.title = title; // properties
        this.description = description;
        this.price = price;
        this.qty = qty;
        this.id = "Hello";


    }
}

class App{  // class
        static init(){  // static method : init method is used to initialize the object of the class 
            // what is static method?
            // static method is a method which is used to initialize the object of the class.
        const Pi1 = new ProductItems("iphone", "mobile", 1000, 1)
        console.log(Pi1);
        console.log(Pi1.id);
    }
}
App.init();