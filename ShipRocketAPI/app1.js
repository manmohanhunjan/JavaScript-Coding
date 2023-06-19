var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM2NjI1NDcsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjg2OTAwMDk1LCJleHAiOjE2ODc3NjQwOTUsIm5iZiI6MTY4NjkwMDA5NSwianRpIjoiUWY0NWN2SHRZTjdhR09odiJ9.Z2r4WIDrGJD3vJJsuUUYVUmadX9J8Drb9KbMMQpRbqU");

var raw = JSON.stringify({
  "order_id": "224-447",
  "order_date": "2023-03-24 11:11",
  "pickup_location": "Primary",
  "channel_id": "",
  "comment": "Reseller: M/s Goku",
  "billing_customer_name": "Naruto",
  "billing_last_name": "Uzumaki",
  "billing_address": "House 221B, Leaf Village",
  "billing_address_2": "Near Hokage House",
  "billing_city": "New Delhi",
  "billing_pincode": "110002",
  "billing_state": "Delhi",
  "billing_country": "India",
  "billing_email": "naruto@uzumaki.com",
  "billing_phone": "9876543210",
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
      "name": "Kunai",
      "sku": "chakra123",
      "units": 10,
      "selling_price": "900",
      "discount": "",
      "tax": "",
      "hsn": 441122
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

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result + "success"))
  .catch(error => console.log('error', error));