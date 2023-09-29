// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Manmohan",
            lastName: "Hunjan"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5.5: "a", 5: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4} //TODO I will use this mainly

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "asdas"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //TODO returns an array of keys vv IMPORTANT and useful like in database
// console.log(Object.values(tinderUser)); //TODO returns an array of keys vv IMPORTANT and useful like in database
// console.log(Object.entries(tinderUser)); //TODO returns an array of keys vv IMPORTANT and useful like in database

// console.log(tinderUser.hasOwnProperty("isLogged"))

//! Object Destructuring

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Manmohan",
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

//! JSON - JavaScript Object Notation - It is a string representation of an object
//! and it is used to send data from server to client and vice versa

// {
//     "name": "Manmohan",
//     "coursename": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]