// Log a statement using console.log
// console.log("Hello from main.js");

//? Variables

// let age = 25;
// console.log(age);

// const salary = 80000;
// console.log(salary);

// let sum = 0;
// sum = 5
// console.log(sum);

//? Data Types

// const name = "manmohan";
// const language = "JS";

// const total = 0;
// const PI = 3.14;

// const isPrimaryNumber = true;
// const isNewUser = false;

// let result;
// console.log(result);

// const res = null;

// const data = null;

// //* Object Literal
// const person = {
//   firstName: "Bruce",
//   lastName: "Wayne",
//   age: 30,
// };

// console.log(person.firstName);

// //* Array
// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[4]);

// let a = 10;
// a = "mohan";
// a = true;

// console.log(a);

//? Operators

// let x = 10;
// let y = 5;

// console.log(x % y);
// console.log(++x);
// console.log(--y);

// //* Assignment Operators
// console.log(x == y);

// //* Comparison Operators
// console.log(x === y);
// console.log(x !== y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// //* Logical Operators
// const isValidNumber = x > 8 || y < 4;
// console.log(isValidNumber);

// const isValid = false;
// console.log(!isValid);

// console.log('Bruce' + 'Wayne');

// //* Ternary Operator
// const isEven = 9 % 2 === 0 ? "Even" : "Odd";
// console.log(isEven);

//? Type Conversion

//* Implicit Type Conversion

// console.log(true + "2");
// console.log('4' - 2);
// console.log('4' * 2);
// console.log('4' / 2);

// console.log('5' - null);
// console.log(5 + undefined);

//* Explicit Type Conversion

// console.log(Number('5'));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number('hello'));

// console.log(parseInt('5.5'));
// console.log(parseFloat('5.5'));

// console.log(String(5));
// console.log((500).toString());
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));

// console.log(Boolean(5));
// console.log(Boolean(0));
// console.log('spaces:' + Boolean(' '));
// console.log(Boolean('hello'));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

//? Equality

// const x = 5;
// const y = '5';

// console.log(x == y);
// console.log(x === y);

// console.log(x != y);
// console.log(x !== y);

//? Conditionals

// const num = 0;

// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// const color = "bbi";

// switch (color) {
//   case "red":
//     console.log("Red");
//     break;
//   case "blue":
//     console.log("Blue");
//     break;
//   default:
//     console.log("Invalid Color");
//     break;
// }

//? Loops

// for (initialization; condition; increment/decrement) {
// }

// for (let i = 1; i <= 5; i++) {
//     console.log('Iteration number ' + i);

// }

//* While Loop

// let i = 1;
// while (i <= 5) {
//   console.log("Iteration number " + i);
//   i++;
// }

//* Do While Loop

// let i = 6;
// do {
//   console.log("Iteration number " + i);
//   i++;
// } while (i <= 5);

//* For...of Loop

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//   console.log(num);
// }

//* For...in Loop

// const person = {
//   firstName: "Bruce",
//   lastName: "Wayne",
//   age: 30,
// };

// for (const key in person) {
//   console.log(key, person[key]);
// }

//? Functions
// function greet(username) {
//     console.log(username);
// }

// function add(a, b) {
//   return a + b;
// }

// const sum = add(5, 10);
// console.log(sum);

// //* Arrow Function
// const arrowSum = (a, b) => a + b;
// console.log(arrowSum(5, 10));

// const addFive = num => num + 5;
// console.log(addFive(10));

//? Scope

const globalVar = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(globalVar, outerVar, innerVar);
  }

  inner();
}

outer();

