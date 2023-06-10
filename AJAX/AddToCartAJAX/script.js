const addToCart = document.querySelector("#btnAddToCart");
let count = 0;

addToCart.addEventListener("click", () => {
  const tbody = document.querySelector("#tbody");
  fetch("https://jsonplaceholder.typicode.com/comments") // fetch() returns a promise object which is resolved when the response is available
    .then((response) => response.json()) // response.json() returns a promise object which is resolved when the JSON data is available
    .then((json) => render(json));

  const render = (json) => {
    const tr = document.createElement("tr");
    const td = [];
    for (let i = 0; i < 4; i++) {
      td[i] = document.createElement("td");
    }
    td[0].textContent = json[count].id;
    td[1].textContent = json[count].name;
    td[2].textContent = json[count].email;
    td[3].textContent = json[count].body;

    for (let i = 0; i < 4; i++) {
      tr.appendChild(td[i]);
    }

    tbody.appendChild(tr);
    count++;
  };
})//fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',  // GET, POST, PUT, DELETE, PATCH (PATCH is used to update a part of the resource)
//     body: JSON.stringify({  // body data type must match "Content-Type" header (JSON.stringify() converts a JavaScript object or value to a JSON string)
//       title: 'foo',      // The body of the request is JSON data
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

`JSON (JavaScript Object Notation) is a lightweight data interchange format that is
 easy for humans to read and write and easy for machines to parse and generate. 
 A JSON string refers to a string representation of data in the JSON format.

In JSON, data is structured using key-value pairs and organized into objects and arrays. 
Here's an example of a JSON string representing information about a person:
{
    "name": "John",
    "age": 30,
    "city": "New York"
  }
  In this example, the JSON string represents an object with three key-value pairs: "name" with the value "John", "age" with the value 30, 
  and "city" with the value "New York". The keys are enclosed in double quotes, and the values can be strings, numbers, booleans, arrays, or nested objects.

JSON strings are commonly used for data exchange between a server and a web application. 
They provide a standardized format that can be easily transmitted over the network and converted back into JavaScript objects.

To work with JSON strings in JavaScript, you can use the JSON object, 
which provides 

--methods to parse JSON strings into JavaScript objects (JSON.parse()) and convert JavaScript objects into JSON strings (JSON.stringify()).

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const person = JSON.parse(jsonString);
console.log(person.name); // Output: John


const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  const jsonString = JSON.stringify(person);
  console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}
  `;
