let myName = "manmohan      "



// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.manmohan = function () {
    console.log(`manmohan is present in all objects`);
}

Array.prototype.heyManmohan = function(){
    console.log(`Manmohan says hello`);
}

// heroPower.manmohan()
myHeros.manmohan()
myHeros.heyManmohan()
// heroPower.heyManmohan();

// inheritance

const User = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()
myName.truelength()
"molly".truelength()
"iceTea".truelength()