async function fetchData(serverName) {
    console.log(`Fetching from ${serverName}...`);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000)); // Simulate delay
    return `Data from ${serverName}`;
}


// Write your code here to fetch data from Server A, B, and C one by one
const getAllData = async () => {
     
    const serverAData = await fetchData('Server A')
    console.log ('data from server a', serverAData)

    const serverBData = await fetchData('Server B')
    console.log ('data from server b', serverBData)

    const serverCData = await fetchData('Server C')
    console.log ('data from server c', serverCData)

    console.log ('all data fetched')

}


// Call the main function - Do not modify
getAllData();
