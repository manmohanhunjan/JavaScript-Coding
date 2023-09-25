const accountId = 1234;
let accountEmail = "manmohan@mail.com";
var accountPassword = "1234";
accountCity = "Delhi";
let accountState;

// accountId = 12345; // Error

accountEmail = "M@m.com"
accountPassword = "12345"
accountCity = "Mumbai"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and hoisting
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);