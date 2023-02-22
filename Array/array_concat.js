let a1 = [10,20,30]
let a2 = [1,2,3]

// function concatin(data) {
//     a1[a1.length] = data;
//     return a1.length;
// }

//     result = concatin(a2);
//     console.log(result);
//     console.log(a1);
// let i = 0;
// while (i<a2.length) {
//     a1[a1.length] = a2[i];
//     i++;
// }

// console.log(a1)

for (let i = 0; i < a2.length; i++) {
    a1[a1.length] = a2[i];
    
}
console.log(a1);