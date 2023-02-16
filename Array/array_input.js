var arr = [];
function push_op() {
    var array_input = document.getElementById("array-input").value;
    arr[arr.length] = array_input;
    document.getElementById("result").innerHTML=arr;
}
function pop_op() {
    var array_input = document.getElementById("result").value;
    arr= array_input[array_input.length - 1];
    document.getElementById("result").innerHTML=arr;
}
function unshift_op() {
    var array_input = document.getElementById("array-input").value;
    arr[arr.length] = array_input;
    document.getElementById("result").innerHTML=arr;
}
// function push_op() {
//     var array_input = document.getElementById("array-input").value;
//     arr[arr.length] = array_input;
//     document.getElementById("result").innerHTML=arr;
// }