
let i = 99;

while (i>=0) {
    if (i==1) {
        console.log( i + " bottles of beer on the wall " + i +"bottles of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
        i--;
    } else if (i==0) {
        console.log("No more bottles")
        --i;
    } else {
    console.log( i + " bottles of beer on the wall " + i +"bottles of beer. Take 1 down, pass it around, " + --i + " bottles of beer on the wall.")
    }
}
//WHATS THE PROBLEM HERE?   