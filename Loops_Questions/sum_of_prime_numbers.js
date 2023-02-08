let n = +prompt("Enter a number");
let i = 1;
let sum = 0;
while (i<=n) {
    let tracker = 0;
    let j = 2;
    while (j<i) {
        if (i%j==0) {
            console.log(i + "is Not a Prime");
            break;
        } else{

            console.log(i + "is a Prime");
            tracker += i
        }
        j++;
    }
    if (tracker>0) {
        sum += i;
    }
    i++
}
console.log("sum is" + sum);