`Interfaces: 
While JavaScript doesn't have built-in interfaces like
some other programming languages, you can simulate interfaces
using object literals or classes. Interfaces define a
contract that classes must adhere to. Here's an example:`;

//Interface using object literal

const Printable = {
  print() {
    throw new Error("Method not implemented.");
  },
};

class Book {
  constructor(title) {
    this.title = title;
  }

  print() {
    console.log(`Printing book: ${this.title}`);
  }
}

class Magazine {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(`Printing magazine: ${this.name}`);
  }
}

function printItem(item) {
  if ("print" in item) {
    item.print();
  } else {
    throw new Error("Object does not implement the Printable interface.");
  }
}

const book = new Book('JavaScript Basics');
const magazine = new Magazine('Tech Today');

printItem(book);
printItem(magazine);