let n = +prompt("Enter a natural number");
let i = 1;
let sum = 0;

while (i<=n) {
    let square = 1;
    square = i*i;
    console.log("Square of "+i+" is: "+square);
    sum += square;
    i++;
}
console.log("The sum is"+ sum);