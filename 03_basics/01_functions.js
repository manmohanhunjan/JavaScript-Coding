

function sayMyName() {
    console.log("M");
console.log("a");
console.log("n");
console.log("m");
console.log("o");
console.log("h");
console.log("a");
console.log("n");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}

// addTwoNumbers(3, 5);

const result = addTwoNumbers(3, 5);
// console.log(`Result : ${result}`);

function loginUserMessage(username){
    if (!username) {
        console.log("Please provide a username");
        return;
    } 
    return `${username} just logged in`;
}

console.log(loginUserMessage("Manmohan"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));