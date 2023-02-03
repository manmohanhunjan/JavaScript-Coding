let n = +prompt("Enter a Number");

for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
        console.log("*");
    }
}