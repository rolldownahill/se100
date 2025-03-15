// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate some asynchronous operation using setTimeout
    setTimeout(() => {
      resolve("Promise resolved!"); // The promise is successfully resolved after 1 second
    }, 1000);
  });
  
  // Use the promise
  myPromise.then((message) => {
    console.log(message); // Logs: "Promise resolved!" after 1 second
  });

