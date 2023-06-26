

const updateBtn = document.querySelector("#updateBtn");

updateBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked");
    const order_id = +document.querySelector("#order_id").value;
const pickupLocation = document.querySelector("#pickup_location").value;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM2NjI1NDcsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjg2OTAwMDk1LCJleHAiOjE2ODc3NjQwOTUsIm5iZiI6MTY4NjkwMDA5NSwianRpIjoiUWY0NWN2SHRZTjdhR09odiJ9.Z2r4WIDrGJD3vJJsuUUYVUmadX9J8Drb9KbMMQpRbqU");

var raw = JSON.stringify({
  "order_id": [
    order_id
  ],
  "pickup_location": pickupLocation
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://apiv2.shiprocket.in/v1/external/orders/address/pickup", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})