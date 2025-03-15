function fetchData()  {
    // Write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data retrieved'); // The promise is successfully resolved after 1 second
        }, 1000);
    }); // This closes the Promise constructor properly
}

function processData(data)  {
    // Write your code here

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // const processedData = data + ' and processed'
            resolve(data + ' and processed'); // The promise is successfully resolved after 1 second
        }, 2000);

    });
}

function displayData(data){
// Write your code here
    console.log (data)
}

// // Chaining the functions
fetchData()
  .then((data) => processData(data))
  .then((processedData) => displayData(processedData));