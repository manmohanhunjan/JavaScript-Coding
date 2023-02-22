const x = [2,3,4,9]
const y = [10,12,3,4,9]

//Method 1
// const newArr = [...x,...y]

// alert(newArr)

//Method 2
const newA2 = [];
for (let j = 0;j<x.length;j++){
    newA2[j] = x[j]
}

for(let i = 0 ; i<y.length;i++){
    newA2[newA2.length] = y[i];
}

console.log(newA2);