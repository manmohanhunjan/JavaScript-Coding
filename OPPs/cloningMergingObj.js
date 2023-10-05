let user = {
    name: "John",
    age: 30
};

//! Cloning using for..in loop

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object

// We can also use the method Object.assign for that.

// Syntax
//! Object.assign(target, ...sources)
//TODO Creates Shadow Copy

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);
Object.assign(user, {name: "Peter"});
console.log(user);


// We also can use Object.assign to perform a shallow copy of an object,
// that is to copy properties only on the first level. For instance, if
// there’s a nested object, then the nested object still shares the same
// reference.

let user2 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

console.log(user2.sizes.height); // 182

let clone2 = Object.assign({}, user2);

console.log( user2.sizes === clone2.sizes ); // true, same object

// user and clone share sizes
user2.sizes.width++;       // change a property from one place
console.log(clone2.sizes.width); // 51, see the result from the other one
console.log(user2.sizes.width); // 51, see the result from the other one


//! Deep cloning using structuredClone

let user3 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone3 = structuredClone(user3); // cloned!
console.log(clone3.sizes === user3.sizes); // false (not just like user)

user3.sizes.width++;       // change a property from one place
console.log(clone3.sizes.width); // 50, not affected by the change above

//! Circular references

let user4 = {};

user4.me = user4;

let clone4 = structuredClone(user4);
console.log(clone4.me === clone4); // true, it's a same object