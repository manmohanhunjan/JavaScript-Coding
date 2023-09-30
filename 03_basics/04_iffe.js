// Immediately Invoked Function Expression (IIFE)

//! to avoid pollution from global scope we use iife

(function chai() {
    //*named iffe
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB2 CONNECTED ${name}`);
})('manmohan');

//TODO always put semicolon after iffe to stop its execution
