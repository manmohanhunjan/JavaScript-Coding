// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element === 5) {
//         // console.log('I am 5');
//     }
//     console.log(element);
// }

// console.log(index); // ReferenceError: index is not defined

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop at state: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop at state: ${j} and outer loop at state: ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }

// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//! break and continue

// for (let index = 0; index <= 20 ; index++) {
//     if (index === 5) {
//         console.log('Detected 5');
//         break;
//         // continue;
//     }
//     console.log(`Value of i is ${index}`);
    
// }


for (let index = 0; index <= 20 ; index++) {
    if (index === 5) {
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}