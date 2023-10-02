const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography,  network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise complete");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({ username: "Chai", email: "chai@chai.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ username: "manmohan", password: "123" });
    } else {
      rej("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ username: "Javascript", password: "123" });
    } else {
      rej("ERROR: Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();


// const getAllUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    const data = response.json
    return data
})
.then((data) => {
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})