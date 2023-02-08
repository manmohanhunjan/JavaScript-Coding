let n = +prompt("Enter how many times you wanna run this loop");
let x = prompt("Enter the number for the series");
let i = 1;
let hold = "";
while (i<=n) {
    let j = 1;

    while (j<=i) {
        hold += x;
        j++;
    }
    hold += "\n";
    i++;
}
console.log(hold);