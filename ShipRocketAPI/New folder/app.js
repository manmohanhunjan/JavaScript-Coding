// WARNING: For POST requests, body is set to null by browsers.

const submitBtn = document.querySelector('#submitBtn'); // Button to submit the form
let count = 0;  // Counter for order_id
// Event listener for submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the form data
  const order_date = document.querySelector('#order_date').value;
  console.log("🚀 ~ file: app.js:11 ~ submitBtn.addEventListener ~ order_date:", order_date)
  console.log(typeof(order_date));
  const pickup_location = document.querySelector('#pickup_location').value;
  console.log("🚀 ~ file: app.js:13 ~ submitBtn.addEventListener ~ pickup_location:", pickup_location)
  console.log(typeof(pickup_location));
  const comment = document.querySelector('#comment').value;
  console.log("🚀 ~ file: app.js:15 ~ submitBtn.addEventListener ~ comment:", comment)
  console.log(typeof(comment));
  const billing_customer_name = document.querySelector('#billing_customer_name').value;
  console.log("🚀 ~ file: app.js:17 ~ submitBtn.addEventListener ~ billing_customer_name:", billing_customer_name)
    console.log(typeof(billing_customer_name));
  const billing_last_name = document.querySelector('#billing_last_name').value;
  console.log("🚀 ~ file: app.js:19 ~ submitBtn.addEventListener ~ billing_last_name:", billing_last_name)
  console.log(typeof(billing_last_name));
  const billing_address = document.querySelector('#billing_address').value;
  console.log("🚀 ~ file: app.js:21 ~ submitBtn.addEventListener ~ billing_address:", billing_address)
  console.log(typeof(billing_address));

  const billing_address_2 = document.querySelector('#billing_address_2').value;
  console.log("🚀 ~ file: app.js:23 ~ submitBtn.addEventListener ~ billing_address_2:", billing_address_2)
  console.log(typeof(billing_address_2));
  const billing_city = document.querySelector('#billing_city').value;
  console.log("🚀 ~ file: app.js:25 ~ submitBtn.addEventListener ~ billing_city:", billing_city)
  console.log(typeof(billing_city));
  const billing_pincode = +document.querySelector('#billing_pincode').value;  // Pincode is an integer
  console.log("🚀 ~ file: app.js:27 ~ submitBtn.addEventListener ~ billing_pincode:", billing_pincode)
  console.log(typeof(billing_pincode));
  const billing_state = document.querySelector('#billing_state').value;
  console.log("🚀 ~ file: app.js:29 ~ submitBtn.addEventListener ~ billing_state:", billing_state)
  console.log(typeof(billing_state));
  const billing_country = document.querySelector('#billing_country').value;
  console.log("🚀 ~ file: app.js:31 ~ submitBtn.addEventListener ~ billing_country:", billing_country)
  console.log(typeof(billing_country));
  const billing_email = document.querySelector('#billing_email').value;
  console.log("🚀 ~ file: app.js:33 ~ submitBtn.addEventListener ~ billing_email:", billing_email)
  console.log(typeof(billing_email));
  const billing_phone = +document.querySelector('#billing_phone').value;
  console.log("🚀 ~ file: app.js:35 ~ submitBtn.addEventListener ~ billing_phone:", billing_phone)
  console.log(typeof(billing_phone));
  // product details
  const product_name = document.querySelector('#product_name').value;
  console.log("🚀 ~ file: app.js:38 ~ submitBtn.addEventListener ~ product_name:", product_name)
  console.log(typeof(product_name));
  const product_sku = document.querySelector('#sku').value;
  console.log("🚀 ~ file: app.js:40 ~ submitBtn.addEventListener ~ product_sku:", product_sku)
  console.log(typeof(product_sku));
  const product_units = +document.querySelector('#units').value;  // Units is an integer
  console.log("🚀 ~ file: app.js:42 ~ submitBtn.addEventListener ~ product_units:", product_units)
  console.log(typeof(product_units));
  const product_selling_price = +document.querySelector('#selling_price').value;  // Selling price is an integer
  console.log("🚀 ~ file: app.js:44 ~ submitBtn.addEventListener ~ product_selling_price:", product_selling_price)
  console.log(typeof(product_selling_price));
  const hsn = parseInt(document.querySelector('#hsn').value);  // HSN is an integer
  console.log("🚀 ~ file: app.js:46 ~ submitBtn.addEventListener ~ hsn:", hsn)
  console.log(typeof(hsn));

  // misc details
  const channel_id = document.querySelector('#channel_id').value;
  console.log("🚀 ~ file: app.js:50 ~ submitBtn.addEventListener ~ channel_id:", channel_id)
  console.log(typeof(channel_id));
  
  const shipping_customer_name = document.querySelector('#shipping_customer_name').value;
  console.log("🚀 ~ file: app.js:53 ~ submitBtn.addEventListener ~ shipping_customer_name:", shipping_customer_name)
  console.log(typeof(shipping_customer_name));

  const shipping_last_name = document.querySelector('#shipping_last_name').value;
  console.log("🚀 ~ file: app.js:56 ~ submitBtn.addEventListener ~ shipping_last_name:", shipping_last_name)
  console.log(typeof(shipping_last_name));

  const shipping_address = document.querySelector('#shipping_address').value;
  console.log("🚀 ~ file: app.js:59 ~ submitBtn.addEventListener ~ shipping_address:", shipping_address)
  console.log(typeof(shipping_address));

  const shipping_address_2 = document.querySelector('#shipping_address_2').value;
  console.log("🚀 ~ file: app.js:62 ~ submitBtn.addEventListener ~ shipping_address_2:", shipping_address_2)
  console.log(typeof(shipping_address_2));

  const shipping_city = document.querySelector('#shipping_city').value;
  console.log("🚀 ~ file: app.js:65 ~ submitBtn.addEventListener ~ shipping_city:", shipping_city)
  console.log(typeof(shipping_city));

  const shipping_pincode = +document.querySelector('#shipping_pincode').value;  // Shipping pincode is an integer
  console.log("🚀 ~ file: app.js:68 ~ submitBtn.addEventListener ~ shipping_pincode:", shipping_pincode)
  console.log(typeof(shipping_pincode));

  const shipping_state = document.querySelector('#shipping_state').value;
  console.log("🚀 ~ file: app.js:71 ~ submitBtn.addEventListener ~ shipping_state:", shipping_state)
  console.log(typeof(shipping_state));

  const shipping_country = document.querySelector('#shipping_country').value;
  console.log("🚀 ~ file: app.js:74 ~ submitBtn.addEventListener ~ shipping_country:", shipping_country)
  console.log(typeof(shipping_country));

  const shipping_email = document.querySelector('#shipping_email').value;
  console.log("🚀 ~ file: app.js:77 ~ submitBtn.addEventListener ~ shipping_email:", shipping_email)
  console.log(typeof(shipping_email));

  const shipping_phone = +document.querySelector('#shipping_phone').value;  // Shipping phone is an integer
  console.log("🚀 ~ file: app.js:80 ~ submitBtn.addEventListener ~ shipping_phone:", shipping_phone)
  console.log(typeof(shipping_phone));

  // const discount_value = +document.querySelector('#discount_value').value;  // Discount value is an integer
  // console.log("🚀 ~ file: app.js:83 ~ submitBtn.addEventListener ~ discount_value:", discount_value)
  // console.log(typeof(discount_value));

  const tax = +document.querySelector('#tax').value;  // Tax is an integer
  console.log("🚀 ~ file: app.js:86 ~ submitBtn.addEventListener ~ tax:", tax)
  console.log(typeof(tax));

  const payment_method = document.querySelector('#payment_method').value;
  console.log("🚀 ~ file: app.js:89 ~ submitBtn.addEventListener ~ payment_method:", payment_method)
  console.log(typeof(payment_method));

  // const shipping_charges = +document.querySelector('#shipping_charges').value;  // Shipping charges is an integer
  // console.log("🚀 ~ file: app.js:92 ~ submitBtn.addEventListener ~ shipping_charges:", shipping_charges)
  // console.log(typeof(shipping_charges));

  const giftwrap_charges = +document.querySelector('#giftwrap_charges').value;  // Giftwrap charges is an integer
  console.log("🚀 ~ file: app.js:95 ~ submitBtn.addEventListener ~ giftwrap_charges:", giftwrap_charges)
  console.log(typeof(giftwrap_charges));

  const transaction_charges = +document.querySelector('#transaction_charges').value;  // Transaction charges is an integer
  console.log("🚀 ~ file: app.js:98 ~ submitBtn.addEventListener ~ transaction_charges:", transaction_charges)
  console.log(typeof(transaction_charges));

  const total_discount = +document.querySelector('#total_discount').value;  // Total discount is an integer
  console.log("🚀 ~ file: app.js:101 ~ submitBtn.addEventListener ~ total_discount:", total_discount)
  console.log(typeof(total_discount));

  const sub_total = +document.querySelector('#sub_total').value;  // Sub total is an integer
  console.log("🚀 ~ file: app.js:104 ~ submitBtn.addEventListener ~ sub_total:", sub_total)
  console.log(typeof(sub_total));

  const length = parseFloat(document.querySelector('#length').value);  // Length is a float
  console.log("🚀 ~ file: app.js:107 ~ submitBtn.addEventListener ~ length:", length)
  console.log(typeof(length));

  const breadth = parseFloat(document.querySelector('#breadth').value);  // Breadth is a float
  console.log("🚀 ~ file: app.js:110 ~ submitBtn.addEventListener ~ breadth:", breadth)
  console.log(typeof(breadth));

  const height = parseFloat(document.querySelector('#height').value);  // Height is a float
  console.log("🚀 ~ file: app.js:113 ~ submitBtn.addEventListener ~ height:", height)
  console.log(typeof(height));

  const weight = parseFloat(document.querySelector('#weight').value);  // Weight is a float
  console.log("🚀 ~ file: app.js:116 ~ submitBtn.addEventListener ~ weight:", weight)
  console.log(typeof(weight));



  var data = JSON.stringify({
    "order_id": count,
    "order_date": order_date,
    "pickup_location": pickup_location,
    "channel_id": "",
    "comment": comment,
    "billing_customer_name": billing_customer_name,
    "billing_last_name":  billing_last_name,
    "billing_address":  billing_address,
    "billing_address_2":  billing_address_2,
    "billing_city": billing_city,
    "billing_pincode": billing_pincode,
    "billing_state": billing_state,
    "billing_country":  billing_country,
    "billing_email":  billing_email,
    "billing_phone":  billing_phone,
    "shipping_is_billing": true,
    "shipping_customer_name": "",
    "shipping_last_name": "",
    "shipping_address": "",
    "shipping_address_2": "",
    "shipping_city": "",
    "shipping_pincode": "",
    "shipping_country": "",
    "shipping_state": "",
    "shipping_email": "",
    "shipping_phone": "",
    "order_items": [
      {
        "name": product_name ,
        "sku": product_sku,
        "units": product_units,
        "selling_price": product_selling_price,
        "discount": "",
        "tax": "",
        "hsn": hsn,
      }
    ],
    "payment_method": "Prepaid",
    "shipping_charges": 0,
    "giftwrap_charges": 0,
    "transaction_charges": 0,
    "total_discount": 0,
    "sub_total": 9000,
    "length": 10,
    "breadth": 15,
    "height": 20,
    "weight": 2.5
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      if (this.status === 200) {
        console.log(this.responseText);
        
      }
    }
  });
  
  xhr.open("POST", "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM2NjI1NDcsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjg2OTAwMDk1LCJleHAiOjE2ODc3NjQwOTUsIm5iZiI6MTY4NjkwMDA5NSwianRpIjoiUWY0NWN2SHRZTjdhR09odiJ9.Z2r4WIDrGJD3vJJsuUUYVUmadX9J8Drb9KbMMQpRbqU");
  
  xhr.send(data);

  count++;

  });

  // Get Request

  const getBtn = document.querySelector('#getBtn'); 

  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function(){
      if(this.readyState === 4){
        if (this.status === 200) {
          console.log(this.responseText);
        }
      }
    })

    xhr.open("GET", "https://apiv2.shiprocket.in/v1/external/orders/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM2NjI1NDcsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjg2OTAwMDk1LCJleHAiOjE2ODc3NjQwOTUsIm5iZiI6MTY4NjkwMDA5NSwianRpIjoiUWY0NWN2SHRZTjdhR09odiJ9.Z2r4WIDrGJD3vJJsuUUYVUmadX9J8Drb9KbMMQpRbqU")
    xhr.send();
  }); 


