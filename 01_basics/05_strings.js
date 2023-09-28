const name = "Manmohan";
const repoCount = 20;

console.log(`My name is ${name.toUpperCase()} and I have ${repoCount} repositories on GitHub`)

const gameName = new String("ManmohanCoder");
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.indexOf("Coder"));

// console.log(gameName.slice(0, 8));

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("a"));

// const newString = gameName.substring(0, 8);
// console.log(newString);

// const anotherString =gameName.slice(-8, -1)
// console.log(anotherString)

// const newStringOne = "  ManmohanCoder    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.google.com/manmohan%20coder";

console.log(url.replace('%20', '-'));
console.log(url.includes("manmohan"));
console.log(gameName.split('n'));