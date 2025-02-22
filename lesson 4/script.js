// // Exercise 1
// Write JavaScript code to help your user find the total sum of the closing prices of MSFT.

// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// // Write your code below

// let total = 0

// for (let i = 0; i < MSFTStockClosingPrices.length ; i++) {
//     total += MSFTStockClosingPrices[i]
// }

// console.log ('The total sum of closing prices of MSFT is ' + total)

// Exercise 2

// Write JavaScript code to help your user find the total sum of the all the closing prices of MSFT over two weeks.

const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below

    //Sample Answer 1

// let sum = 0

// for (let i=0 ; i < MSFTStockClosingPrices.length ; i++) {
//     let week = MSFTStockClosingPrices[i];
//     for (let day in week)
//     sum += week[day]
// }

// console.log ('The total sum of closing prices of MSFT is ' + Math.round(sum))

//Sample Answer 2

let sum = 0

for (const week of MSFTStockClosingPrices){
    for (const day of Object.values(week))
    sum += day
}

console.log (sum.toFixed(2))