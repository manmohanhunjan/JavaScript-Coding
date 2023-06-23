const myPromise = new Promise((resolve, reject) => {
  // 1. setTimeout
  // 2. setInterval
  // 3. XMLHttpRequest
  // 4. Database calls
  // 5. File system operations
  // 6. Any other network calls
  // 7. Any other I/O operations
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  xhr.open("GET", url, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(xhr.responseText);
    }
  };
  xhr.send();
});

myPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

//-----------------Promise 1-----------------

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);

  setTimeout(() => {
    reject("Promise 1 rejected");
  }, 1000);
});

myPromise1
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

//-----------------Promise 2-----------------

const myPromise2 = new Promise((resolve, reject) => {
  //setInterval
  setInterval(() => {
    resolve("Promise 2 resolved");
  }, 3000);

  setInterval(() => {
    reject("Promise 2 rejected");
  }, 1000);
});

myPromise2
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

//how are settimeout and setinterval different from each other?
//settimeout runs only once after the specified time interval
//setinterval runs repeatedly after the specified time interval

//why does setInterval run only once?
//because the promise is resolved after the first time interval

//-----------------Promise 3-----------------

// const myPromise3 = new Promise((resolve, reject) => {
//   //File system operations
//   const fs = require("fs");
//   fs.readFile("index.html", "utf8", (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });

// myPromise3
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
