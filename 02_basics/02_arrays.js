const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

//! concat
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//! spread operator

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

//! flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//! isArray

console.log(Array.isArray("Manmohan"))
console.log(Array.from("Manmohan"))
console.log(Array.from({name : "Manmohan"})) //? interesting case

let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1, score2, score3));