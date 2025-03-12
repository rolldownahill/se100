// Simulates a task that waits for a given delay before logging a message
function waitAndLog(message, delay) {
    return new Promise((resolve) => {
        // Set a timeout to log the message after the specified delay
        setTimeout(() => {
            console.log(message); // Log the message to the console
            resolve(); // Resolve the promise after logging
        }, delay);
    });
}

// Chain the tasks in sequence
waitAndLog("Task 1 completed", 1000) // Wait for 1 second
    .then(() => waitAndLog("Task 2 completed", 1000)) // Wait for another second
    .then(() => waitAndLog("Task 3 completed", 1000)) // Wait for a third second
    .then(() => console.log("All tasks completed")); // Once all tasks are completed, log this message
