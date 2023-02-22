let n = +prompt("Enter a natural number");
let i = +prompt("Enter a start number");
let sum = 0;

while (i<=n ) {

    if (i!=0) {
        let square = 1;
    square = i**2;
    console.log("Square of "+i+" is: "+square);
    sum += square;
    }else{
        i++;
        continue;
    }
    
    i++;
}
console.log("The sum is"+ sum);