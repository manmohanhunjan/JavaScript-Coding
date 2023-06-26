var xhr = new XMLHttpRequest();
var url = 'https://apiv2.shiprocket.in/v1/external/auth/login';

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var authToken = response.token;   

    
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

