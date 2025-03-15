  // Exercise 1

  function getNumberPromise() {
    // Write your code here
    return new Promise ((resolve,reject) => {

        setTimeout(() => {
            resolve(10); // The promise is successfully resolved after 1 second
        }, 2000);
})
  }

// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});