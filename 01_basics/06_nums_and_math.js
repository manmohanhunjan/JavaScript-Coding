const score = 400;
console.log(score);

const balance = new Number(100);

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

// const anotherNumber = balance.toFixed(1)
// console.log(typeof anotherNumber);

const otherNumber = 123.43243

console.log(otherNumber.toPrecision(3));  // 123

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//! +++++++++++++++++++++ Math +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-100));
// console.log(Math.round(1.9));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9));

// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
