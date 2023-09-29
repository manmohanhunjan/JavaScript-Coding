// // alert("Hello JavaScript!");

// // const h1 = document.querySelector("h1");

// // h1.textContent = "Hello World!";

// let admin;
// let name;

// name = "John"; //the name here is depricated because it is not used

// admin = name;

// alert(admin);

// let ourPlanetName = "Earth";

// let currentUserName = "John";

// const BIRTHDAY = "18.04.1982"; // make uppercase?

// let userName = prompt("Enter Your Name", "googlie");

// alert(userName);

// let jsName = prompt("What is the official name of JavaScript?")

// const jsNameResult = jsName == "ECMASCRIPT" ? alert('Right') : alert('You don\'t know Ecmascript?');


// let inputNumber = prompt("Enter a number:");
// const inpNumResult = inputNumber > 0 ? alert(1) : inputNumber < 0 ? alert(-1) : alert(0);
// let login = prompt("Enter Designation");
// let message = (login == 'Employee') ? 'Hello' : 
//             (login == 'Director') ? 'Greetings' :
//             (login == '') ? 'No login' :
//             '';

// alert(message)


// let age = prompt("Enter your age");

// const ageResult = (age >= 14 && age <= 90) ? 'You are between 14 and 90' : 'You are not between 14 and 90';

// alert(ageResult);

//! Password Checker

let role = prompt('Whats your role:');

if (role == 'admin') {
    let pass = prompt('Enter your password:')
    if (pass == '' || pass == null) {
        alert('Canceled');
    } else if(pass == 'TheMaster'){
        alert('Welcome!')
    } else{
        alert('Wrong Password')
    }
} else if (role == '' || role == null) {
    alert('Cancel');
}else{
    alert('I don\'t know you')
}
