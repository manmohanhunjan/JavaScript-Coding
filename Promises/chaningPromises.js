const getUserName = () => {
  return new Promise((resolve, reject) => {
    const username = prompt("Enter your username");
    if (username) {
      resolve(username);
    } else {
      reject("Username not provided");
    }
  });
};

const getPassword = () => {
  return new Promise((resolve, reject) => {
    const password = prompt("Enter your password");
    if (password) {
      resolve(password);
    } else {
      reject("Password not provided");
    }
  });
};

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "admin") {
      resolve("Login successful");
    } else {
      reject("Login failed");
    }
  });
};

getUserName()
  .then((username) => {
    return getPassword()
      .then((password) => {
        return login(username, password);
      })
      .then((response) => {
        console.log(response);
      });
  })
  .catch((error) => {
    console.error(error);
  });

//-----------------Wrong-----------------

// getUserName()
//   .then((username) => {
//     return getPassword();
//   })
//   .then((password) => {
//     return login(username, password);
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
