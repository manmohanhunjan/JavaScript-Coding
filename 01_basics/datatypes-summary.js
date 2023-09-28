//TODO Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const bigInt = 1234567890123456789012345678901234567890n;

//TODO Non-Primitive Data Types
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error
  
const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "shaktiman",
    power: "fly"

}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myObj);


//? -----------------------------------

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "shaktiman"; // Primitive

let anothername = myYoutubeName; // Primitive
anothername = "naagraj";

console.log(anothername);
console.log(myYoutubeName);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user; // Non-Primitive

user2.email = "user@yahoo.com"

console.log(user.email);
console.log(user2.email);

