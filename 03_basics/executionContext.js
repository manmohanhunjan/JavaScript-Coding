//JavaScript Execution Context

// 1. Global Execution Context -> this

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

//? 1) -Memory Creation Phase ->
//*   val1 -> undefined
//*   val2 -> undefined
//*   addNum -> definition
//*   result1 -> undefined
//*   result2 -> undefined

//? 2) -Execution Phase ->
//* val1 <- 10
//* val2 <- 5
//* addNum -> new variable environment + Execution thread
//TODO now in this function addNum step 1 and 2 will occur in the function's context and return a value

//! Whenever we will call addNum function these two steps will execute





// 2. Functional Execution Context
// 3. Block Execution Context
// 4. Eval Execution Context
