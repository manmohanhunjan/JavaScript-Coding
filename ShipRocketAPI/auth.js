var xhr = new XMLHttpRequest();
var url = 'https://apiv2.shiprocket.in/v1/external/auth/login';

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var authToken = response.token;

    // Use the 'authToken' to authenticate your further API calls
    console.log('Authentication Token:', authToken);
  }
};

var email = 'wthboi3@gmail.com';
var password = '!TzFjZ9aPZ@w7T5';

var data = JSON.stringify({
  email: email,
  password: password,
});

xhr.send(data);

// var formData = new FormData();
// formData.append("email", "wthboi4@gmail.com");
// formData.append("password", "!TzFjZ9aPZ@w7T5");

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "https://apiv2.shiprocket.in/v1/external/auth/login");

// xhr.send(formData);
