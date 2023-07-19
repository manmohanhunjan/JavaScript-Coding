

const updateBtn = document.querySelector("#updateBtn");

updateBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked");
    const order_id = +document.querySelector("#order_id").value;
const pickupLocation = document.querySelector("#pickup_location").value;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTY4OTc0Nzg3NiwiZXhwIjoxNjkwNjExODc2LCJuYmYiOjE2ODk3NDc4NzYsImp0aSI6InkxUWxwb2ZvMTBwNUdCWWwiLCJzdWIiOjM2NjI1NDcsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.FCnhW4r16896wUmoh8aBtlPvOchfkSgAKkstS8Prww0");

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