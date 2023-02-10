let i = +prompt("Enter the start");
let n = +prompt("Enter a number");
let sum = 0;
while (i<=n) {
    let tracker = 0;
    let j = 2;
    while (j<i) {
        if (i%j==0) {
            // console.log(i + "is Not a Prime");
            tracker += i
            break;
        } else{

            // console.log(i + "is a Prime");
        }
        j++;
    }
    if (tracker==0 && i!=0 && i!=1) {
        sum += i;
    }
    i++
}
console.log("sum is" + sum);