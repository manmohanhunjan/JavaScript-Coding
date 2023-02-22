const x = [];
let y;
function push_op(y) {
    y = +document.getElementById("array-input").value;
    x[x.length] = y;
    return x.length;
}

result = push_op(y);
document.getElementById("result").innerHTML = result;
console.log(x);