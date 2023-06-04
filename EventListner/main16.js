let arr = [];  // array for storing product details
var btn = document.getElementById("btn");  // add product button
btn.addEventListener("click", () => {  // event listener for add product button
  let productName = document.getElementById("productName").value;
  let productCP = document.getElementById("productCP").value;
  let productColor = document.getElementById("productColor").value;
  let productModal = document.getElementById("productModal").value;

  const productDetail = { // object for storing product details
    pName: productName,
    pCP: productCP,
    pColor: productColor,
    pModal: productModal,
  };
  arr.push(productDetail); // pushing product details to array
  console.log(arr);

  render(); // calling render function
});

var bag = document.getElementById("bag");   // bag button     
bag.addEventListener("click", openModal);   // event listener for bag button

function openModal() {  // function for opening modal
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

let count = 0; // count variable for counting number of products
function render() { // render function for rendering product details
  var tbody = document.querySelector("#table1");
  var tr = document.createElement("tr");

  var id = document.createElement("td");
  var p_name = document.createElement("td");
  var p_cp = document.createElement("td");
  var p_color = document.createElement("td");
  var p_modal = document.createElement("td");
  var button = document.createElement("td");

  var counter = ++count;
  id.textContent = counter;
  p_name.textContent = arr[arr.length - 1].pName;
  p_cp.textContent = arr[arr.length - 1].pCP;
  p_color.textContent = arr[arr.length - 1].pColor;
  p_modal.textContent = arr[arr.length - 1].pModal;

  var btn1 = document.createElement("button");
  btn1.innerHTML = "Add to cart";
  btn1.classList.add("btn", "btn-danger");
  // btn1.id = "modalBtn" + counter;  //error here 
  btn1.setAttribute("id", counter);

  button.append(btn1);

  tr.append(id);
  tr.append(p_name);
  tr.append(p_cp);
  tr.append(p_color);
  tr.append(p_modal);
  tr.append(button);

  tbody.append(tr);

  // tr.id = "inputz" + counter; //not required 

  tbody.addEventListener("click", modal_append);  // btn1 changed to tbody

  var display = document.getElementById("dis");
  display.innerHTML = counter;

  document.getElementById("productName").value = "";
  document.getElementById("productCP").value = "";
  document.getElementById("productColor").value = "";
  document.getElementById("productModal").value = "";
}

var counter1 = 0;
function modal_append(event) {
  if (event.target.classList.contains("btn-danger")) {
    
    var allData = event.target;
    var id = allData.getAttribute("id");
    
    var tbody1 = document.querySelector("#table2");
    
    var tr1 = document.createElement("tr");
    
    var id1 = document.createElement("td");
    var p_name1 = document.createElement("td");
    var p_cp1 = document.createElement("td");
    var p_color1 = document.createElement("td");
    var p_modal1 = document.createElement("td");
    
    var counter2 = ++counter1;
    id1.textContent = counter2;
    p_name1.textContent = arr[id - 1].pName;
    p_cp1.textContent = arr[id - 1].pCP;
    p_color1.textContent = arr[id - 1].pColor;
    p_modal1.textContent = arr[id - 1].pModal;
    
    tr1.append(id1);
    tr1.append(p_name1);
    tr1.append(p_cp1);
    tr1.append(p_color1);
    tr1.append(p_modal1);
    
    tbody1.append(tr1);
  }
}
