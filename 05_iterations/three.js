// for of

// ["", "", ""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//     console.log(`Value is ${i}`);
// }

// const greeting = "Hello World";
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map();
map.set('IND', 'India');
map.set('AUS', 'Australia');
map.set('USA', 'United States of America');
map.set('UK', 'United Kingdom');

console.log(map);

for (const [key, value] of map) {
    console.log(key, '->', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'FIFA',
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, '->', value);
}