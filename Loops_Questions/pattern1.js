let n = +prompt("Enter a number");
let i,j;
let hold="";
for (i=1;i<=n;i++){
    for(j=i;j>=1;j--){
        hold +=(j%2);
        // console.log(" ");
    }
    // console.log("\n");
    hold +="\n";
}
console.log(hold);