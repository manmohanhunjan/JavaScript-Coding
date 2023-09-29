//! singleton
// Object.create

//! object 

const mySym = Symbol("key1")

const JsUser = {
    name: "Manmohan",
    "full name": "Manmohan Hunjan",
    [mySym]: "myKey1",
    age: 23,
    location: "Jaipur",
    email: "manmohan@google.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //? Symbol is not iterable so we can't use for of loop

JsUser.email = "manmohan@chatgpt.com"
// Object.freeze(JsUser)   //? freeze the object so that no one can change the object
JsUser.email = "manmohan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User")
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());