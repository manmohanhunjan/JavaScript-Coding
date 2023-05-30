`Design Patterns:
Design patterns are reusable solutions to common problems
in software design. Familiarizing yourself with design
patterns can help you write more efficient and
maintainable code. Here's an example of the Singleton
pattern:`

class Database {
    constructor(data) {
        if (Database.instance) { //If an instance of the class already exists, return that instance.
            return Database.instance; //This ensures that only one instance of the class exists at any given time.
        }

        //Initialize the database
        this.data = {};

        Database.instance = this; //Store the instance in a property called instance.
    }

    getData(key) { //This method allows you to retrieve data from the database.
        this.data[key]; //Retrieve data
    }

    setData(key,value) { //This method allows you to set data in the database.
        this.data[key] = value; //Set data
    }
}

//Usage
const db1 = new Database(); //Create first instance
bd1.setData('name', 'John'); //Set data

const db2 = new Database(); //The constructor will return the instance created previously.
console.log(db2.getData('name')); //Output: John //Get data from the instance created previously.