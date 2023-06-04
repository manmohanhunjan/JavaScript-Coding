const submitBtn = document.querySelector("#submitBtn"); // submit button
const tbody = document.querySelector("#mainTbody"); // tbody
const modalTbody = document.querySelector("#modalTbody");

let count = 0; // count for serial number
const products = []; // array for storing product details
let cartCount = document.querySelector("#cartCount"); // cart count
console.log(cartCount.innerHTML);
let countForCart = 0; // count for cart count

const modalProduct = []; // array for storing product details in modal body element 

submitBtn.addEventListener("click", () => {
  // event listener for submit button
  const pName = document.querySelector("#pName").value; // input field values
  const pSp = document.querySelector("#pSp").value;
  const pCp = document.querySelector("#pCp").value;
  const pTax = document.querySelector("#pTax").value;
  const pDiscount = document.querySelector("#pDiscount").value;

  count += 1; // incrementing count for serial number of product details in table body element

  // using literals for storing product details
  const productDetails = { // object for storing product details
    count: count,
    name: pName,
    sPrice: pSp,
    cPrice: pCp,
    tax: pTax,
    discount: pDiscount,
  };

  const td = []; // array for storing td elements of table body
  const tr = document.createElement("tr"); // tr element

  // creating new product object
  products.push(productDetails); // pushing new product object to products array

  for (let i = 0; i < 7; i++) {
    // creating td elements
    td[i] = document.createElement("td");
  }


  td[0].textContent = productDetails.count; // adding product details to td elements
  td[1].textContent = productDetails.name;
  td[2].textContent = productDetails.sPrice;
  td[3].textContent = productDetails.cPrice;
  td[4].textContent = productDetails.tax;
  td[5].textContent = productDetails.discount;

  const addToBtn = document.createElement("button");
  addToBtn.setAttribute("id", count); // setting id attribute to addtocart button for identifying product details in modal body element
  addToBtn.textContent = "Add To Cart";
  addToBtn.classList.add("btn", "btn-success", "add-to-cart"); // adding classes to addtocart button

  td[6].appendChild(addToBtn); // adding addtocart button to td element

  for (let k = 0; k < 7; k++) {
    // appending td elements to tr element
    tr.appendChild(td[k]);
  }

  tbody.appendChild(tr); // appending tr element to tbody

  // input field reset
  document.querySelector("#pName").value = "";
  document.querySelector("#pSp").value = "";
  document.querySelector("#pCp").value = "";
  document.querySelector("#pTax").value = "";
  document.querySelector("#pDiscount").value = "";
});

tbody.addEventListener("click", (e) => {
  // event listener for addtocart button
  if (e.target.classList.contains("add-to-cart")) {
    // checking if addtocart button is clicked
    countForCart += 1; // incrementing cart count
    cartCount.innerHTML = countForCart; // updating cart count

    const id = e.target.getAttribute("id"); // getting id of addtocart button

    const product = products[id - 1]; // accessing product details

    const modalObject = {
      // object for storing product details
      count: product.count,
      name: product.name,
      sPrice: product.sPrice,
      cPrice: product.cPrice,
      tax: product.tax,
      discount: product.discount,
      quantity: 1,
    };

    // checking if product is already added to cart
    const isDuplicate = modalProduct.some((modalProduct) => {
      return modalProduct.count === product.count;
    });

    if (!isDuplicate) {

      modalProduct.push(modalObject); // pushing product details to modalProduct array

      const tr = document.createElement("tr"); // tr element

      const td = [];
      for (let j = 0; j < 7; j++) {
        // creating td elements
        td[j] = document.createElement("td");
        td[j].textContent = modalObject[Object.keys(modalObject)[j]];  // adding product details to td elements of modal body element
        tr.appendChild(td[j]);
      }

      modalTbody.appendChild(tr);

      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      );
    }

    // incrementing quantity of product if product is already added to cart
    if (isDuplicate) {  
      const tr = modalTbody.querySelectorAll("tr"); // selecting all tr elements of modal body element
      const td = tr[id - 1].querySelectorAll("td"); // selecting all td elements of tr element

      const quantity = td[6].textContent; // getting quantity of product
      const newQuantity = parseInt(quantity) + 1; // incrementing quantity of product

      td[6].textContent = newQuantity; // updating quantity of product

      modalProduct[id - 1].quantity = newQuantity; // updating quantity of product in modalProduct array

    }

    

    
  }
});

