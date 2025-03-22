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

// const MSFTStockClosingPrices = [
//     {
//         Monday: 254.12,
//         Tuesday: 253.12,
//         Wednesday: 256.97,
//         Thursday: 257.52,
//         Friday: 258.93
//     },
//     {
//         Monday: 292.20,
//         Tuesday: 289.73,
//         Wednesday: 291.04,
//         Thursday: 294.55,
//         Friday: 296.29
//     }]
    
    // Write your code below

    //Sample Answer 1

// let sum = 0

// for (let i=0 ; i < MSFTStockClosingPrices.length ; i++) {
//     let week = MSFTStockClosingPrices[i];
//     for (let day in week)
//     sum += week[day]
// }

// console.log ('The total sum of closing prices of MSFT is ' + sum.toFixed(2))

//Sample Answer 2

// let sum = 0

// for (const week of MSFTStockClosingPrices){
//     for (const day of Object.values(week))
//     sum += day
// }

// console.log (sum.toFixed(2))

// Exercise 3

// total = 0

// for (let week of MSFTStockClosingPrices){
//     for (let day in week){
//         total += week[day]
//     }
// }

// console.log ('The total sum of closing prices of MSFT is ' + total.toFixed(2))

// Exercise 4

// let i = 0;
// total = 0

// while (i < MSFTStockClosingPrices.length) {
//     let week = MSFTStockClosingPrices[i]
//     for (let day in week){
//         total += week[day]
//     }
//     i++
// }

// console.log(total.toFixed(2))

// Exercise 5

// function getBetween() {
// 	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// 	let maxPrice = 257
//     let lowPrice = 254
//     let i = 0

//     for (let price of MSFTStockClosingPrices){
//         if (price <= maxPrice && price >= lowPrice){
//             i++
//         }
//     }
//     console.log ('numbers in range' , i)
// }

// getBetween();

// Exercise 6

// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];

// // Write your code below

// function getBetween(answer, stockName){
//     lowPrice = 254
//     maxPrice = 257
//     i = 0

//     for (let price of answer){
//         if (price <=maxPrice && price >= lowPrice){
//             i++
//         }
//     }
//     console.log(`Closing price of ${stockName} between ${lowPrice} and ${maxPrice}: ${i} Days`);
// }

// getBetween(MSFTStockClosingPrices, 'MSFT');
// getBetween(AAPLStockClosingPrices, 'AAPL');

// Exercise 7

const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

// function sortPerformanceInAscOrder(StockDailyPerformance){
//     StockDailyPerformance.sort()
// }
// // Do not modify this code:
// sortPerformanceInAscOrder(StockDailyPerformance);
// console.log(StockDailyPerformance);

// Have to call the function to sort the array first, before i can print it out
// hence why i need to use console.log instead of just calling the function

// Exercise 8


function sortPerformanceInAscOrder (StockDailyPerformance){
    
}