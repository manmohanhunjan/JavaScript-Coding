//? Scopes


// let a = 10;

// function outer() {
//     let b = 20;
//     function inner() {
//         let c = 30;
//         console.log(a, b, c);
//     }
//     inner();
// }
// outer();

//? Closure

// function initializeCounter() {
//     let counter = 0;
//     function incrementCounter() {
//         counter++;
//         console.log(counter);
//     }
//     return incrementCounter;
// }

// const fn = initializeCounter();
// fn();
// fn();

//? Function Currying
//
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             };
//         };
//     };
// }
//
// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));
//
// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(4);
//
// console.log(add5);

//? this keyword

// function sayMyName(name) {
//     console.log(`My name is ${name}`);
// }
//
// sayMyName('Walther White')
// sayMyName('Heisenberg')

const person = {
    name: 'Manmohan',
    sayMyName: function () {
        console.log(`My name is ${this.name}`);
    }
}

// person.sayMyName();

globalThis.name = 'Superman';
function sayMyName() {
    console.log(`My name is ${this.name}`);
}

// sayMyName.call(person);

function Person(name) {
    //this = {}
    this.name = name;
}

const p1 = new Person('Manmohan');
const p2 = new Person('Batman');

// console.log(p1.name, p2.name);

sayMyName();