let n = +prompt("Enter a number");
let sum  = 0;

//not mandatory below while loop code

// let i = 1;

// while (i<=n) {
//     if (i%2!=0) {
//         console.log(i);
//         sum += i;
//     }
//     i++;
// }
// console.log("the sum is" + sum);

//By For loop
for (let i = 1; i <= n; i++) {
    
    if (i%2!=0) {
                console.log(i);
                sum += i;
            }
    
}

console.log("the sum is" + sum);