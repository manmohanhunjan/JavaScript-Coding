var arr = [];
function push_op() {
    var array_input = document.getElementById("array-input").value;
    arr[arr.length] = array_input;
    document.getElementById("result").innerHTML=arr;
}
function pop_op() {
    // var newArr = document.getElementById("result").value;
    // var newArr = [];
    // alert(newArr);

    // let lastIndex = arr.length - 1;
    // arr[lastIndex] = undefined;

    arr[arr.length - 1] = undefined;

    document.getElementById("result").innerHTML=arr;
}
function unshift_op() {
    var array_input = document.getElementById("array-input").value;
    for(i = arr.length -1 ;i>=0;i--){
        arr[i + 1] = arr[i]
    }
    arr[0] = array_input;
    alert(arr)
    document.getElementById("result").innerHTML=arr;
}
function shift_op() {
    var array_input = document.getElementById("array-input").value;
    for(i = arr.length -1 ;i>=0;i--){
        arr[i + 1] = arr[i]
    }
    arr[0] = array_input;
    alert(arr)
    document.getElementById("result").innerHTML=arr;
}
