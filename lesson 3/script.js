let stockprice = 300
console.log(stockprice)

stockprice += 500
console.log(stockprice)

// Complete the code below

// let company = 'Microsofts'
// console.log(company);

// company = 'Microsoft\'s'
// console.log(company);

let money = 6000
money = money + 3000
money = money *= 3
console.log (money)

// const company = "Microsoft";
// const closingPrice = 200.92;
// console.log(company + " you're bankrupt " + closingPrice)

// const companyName = "Amazon"
// const companyRating = 5

// console.log(companyName + ' has a customer satisfaction rating of '+ companyRating)

// const company = "Microsoft";
// const closingPrice = 200.92;

// console.log("%s ended the trading session with a closing price of %f", company, closingPrice);

const welcome_string = "Welcome to a world of JavaScript";

const char = welcome_string.substring(0,7);

console.log(char); // outputs "Welcome" to the console


const companyName = "Metaa"
console.log(companyName.substring(0,4).toUpperCase())

// Write your code below

// Exercise 6

const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice =  "84.22";

// Do not modify anything above
// Write your code below

const average = (parseFloat(DayOneClosingPrice)+parseFloat(DayTwoClosingPrice))/2

console.log(average)

// Exercise 7
// - Log the average closing price of TSLA
// - Hint: Average = Total Sum / Total Count

const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]


// Write your code below

const sumTSLA = TSLAClosingPrices.reduce ((total, price) => total + price, 0)
const averageTSLA = (sumTSLA/TSLAClosingPrices.length)
console.log(averageTSLA)

// Exercise 8
// You are provided two data objects storing stock data of AAPL for the current and previous day.

// You have been tasked to calculate the *Heiken Ashi* candlestick using the following formula:

// - Open: (open of previous bar + close of previous bar) divided by 2
// - Close: (open + close + high + low of current bar) divided by 4
// - High: the maximum value from the high, open, or close of the current period
//     - Hint: Use the **`Math.max()`** function
// - Low: the minimum value from the low, open, or close of the current period
//     - Hint: Use **`Math.min()`** function

const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

// Write your code below

const Open = ((AAPLPrevBar.open + AAPLPrevBar.close)/2)
console.log(Open)

const sumOfCurrentBar = Object.values(AAPLCurrentBar).reduce((acc, value) => acc + value, 0)
const Close = (sumOfCurrentBar/4)
console.log(Close)

const High = Math.max(...Object.values(AAPLCurrentBar))
console.log(High)

const Low = Math.min(...Object.values(AAPLCurrentBar))
console.log (Low)

// Exercise 9

// You have been tasked to check if:

// - Opening price is higher than the closing price
//     - Log **`Stock is bearish`** to your console if it’s true
// - Closing price is higher than the opening price
//     - Log **`Stock is bullish`** to your console if it’s true

const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}

// Write your code below

if (stockOHLC.open > stockOHLC.close) {
    console.log('stock is bearish')
} else {
    console.log('stock')
}