fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')

// .then(response => response.json()) // Handle the JSON response properly
.then (data => data.json())  
.then(output => console.log(output))
  // .catch(error => console.error('Error:', error));

  fetch ('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&year=2020&apikey=UBGBC8M1NI4QHNCR')
  .then (data => data.json())  
  .then(output => console.log(output))

  //fetch
  fetch ('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=UBGBC8M1NI4QHNCR')
  // obtain body from response object
  .then (data => data.json())
  .then (body => {
    const annualEarnings = body['annualEarnings']
    for (let i = 0; i< annualEarnings.length; i++){
      const current = annualEarnings[i]
      if (current['fiscalDateEnding'].includes('2020')){
        console.log(current['reportedEPS'])
        return
      }

    }

  })
  .catch(value => console.log(value))

//   {
//     "symbol": "MSFT",
//     "annualEarnings": [
//         {
//             "fiscalDateEnding": "2024-12-31",
//             "reportedEPS": "6.53"
//         },
//         {
//             "fiscalDateEnding": "2024-06-30",
//             "reportedEPS": "11.81"
//         },
//         {
//             "fiscalDateEnding": "2023-06-30",
//             "reportedEPS": "9.81"
//         },
//         {
//             "fiscalDateEnding": "2022-06-30",
//             "reportedEPS": "9.2"
//         },
//         {
//             "fiscalDateEnding": "2021-06-30",
//             "reportedEPS": "7.97"
//         },
//         {
//             "fiscalDateEnding": "2020-06-30",
//             "reportedEPS": "5.75"
//         },
//         {
//             "fiscalDateEnding": "2019-06-30",
//             "reportedEPS": "4.75"
//         },
//         {
//             "fiscalDateEnding": "2018-06-30",
//             "reportedEPS": "3.88"
//         },
//         {
//             "fiscalDateEnding": "2017-06-30",
//             "reportedEPS": "3.31"
//         },
//         {
//             "fiscalDateEnding": "2016-06-30",
//             "reportedEPS": "2.76"
//         },
//         {
//             "fiscalDateEnding": "2015-06-30",
//             "reportedEPS": "2.5"
//         },
//         {
//             "fiscalDateEnding": "2014-06-30",
//             "reportedEPS": "2.63"
//         },
//         {
//             "fiscalDateEnding": "2013-06-30",
//             "reportedEPS": "2.67"
//         },
//         {
//             "fiscalDateEnding": "2012-06-30",
//             "reportedEPS": "2.73"
//         },
//         {
//             "fiscalDateEnding": "2011-06-30",
//             "reportedEPS": "2.69"
//         },
//         {
//             "fiscalDateEnding": "2010-06-30",
//             "reportedEPS": "2.1"
//         },
//         {
//             "fiscalDateEnding": "2009-06-30",
//             "reportedEPS": "1.7"
//         },
//         {
//             "fiscalDateEnding": "2008-06-30",
//             "reportedEPS": "1.88"
//         },
//         {
//             "fiscalDateEnding": "2007-06-30",
//             "reportedEPS": "1.49"
//         },
//         {
//             "fiscalDateEnding": "2006-06-30",
//             "reportedEPS": "1.27"
//         },
//         {
//             "fiscalDateEnding": "2005-06-30",
//             "reportedEPS": "1.3"
//         },
//         {
//             "fiscalDateEnding": "2004-06-30",
//             "reportedEPS": "1.26"
//         },
//         {
//             "fiscalDateEnding": "2003-06-30",
//             "reportedEPS": "1.05"
//         },
//         {
//             "fiscalDateEnding": "2002-06-30",
//             "reportedEPS": "0.93"
//         },
//         {
//             "fiscalDateEnding": "2001-06-30",
//             "reportedEPS": "0.91"
//         },
//         {
//             "fiscalDateEnding": "2000-06-30",
//             "reportedEPS": "0.87"
//         },
//         {
//             "fiscalDateEnding": "1999-06-30",
//             "reportedEPS": "0.71"
//         },
//         {
//             "fiscalDateEnding": "1998-06-30",
//             "reportedEPS": "0.46"
//         },
//         {
//             "fiscalDateEnding": "1997-06-30",
//             "reportedEPS": "0.33"
//         },
//         {
//             "fiscalDateEnding": "1996-06-30",
//             "reportedEPS": "0.215"
//         }
//     ],
//     "quarterlyEarnings": [
//         {
//             "fiscalDateEnding": "2024-12-31",
//             "reportedDate": "2025-01-29",
//             "reportedEPS": "3.23",
//             "estimatedEPS": "3.1054",
//             "surprise": "0.1246",
//             "surprisePercentage": "4.0124",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2024-09-30",
//             "reportedDate": "2024-10-30",
//             "reportedEPS": "3.3",
//             "estimatedEPS": "3.1",
//             "surprise": "0.2",
//             "surprisePercentage": "6.4516",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2024-06-30",
//             "reportedDate": "2024-07-30",
//             "reportedEPS": "2.95",
//             "estimatedEPS": "2.93",
//             "surprise": "0.02",
//             "surprisePercentage": "0.6826",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2024-03-31",
//             "reportedDate": "2024-04-25",
//             "reportedEPS": "2.94",
//             "estimatedEPS": "2.82",
//             "surprise": "0.12",
//             "surprisePercentage": "4.2553",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2023-12-31",
//             "reportedDate": "2024-01-30",
//             "reportedEPS": "2.93",
//             "estimatedEPS": "2.78",
//             "surprise": "0.15",
//             "surprisePercentage": "5.3957",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2023-09-30",
//             "reportedDate": "2023-10-24",
//             "reportedEPS": "2.99",
//             "estimatedEPS": "2.65",
//             "surprise": "0.34",
//             "surprisePercentage": "12.8302",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2023-06-30",
//             "reportedDate": "2023-07-25",
//             "reportedEPS": "2.69",
//             "estimatedEPS": "2.55",
//             "surprise": "0.14",
//             "surprisePercentage": "5.4902",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2023-03-31",
//             "reportedDate": "2023-04-25",
//             "reportedEPS": "2.45",
//             "estimatedEPS": "2.23",
//             "surprise": "0.22",
//             "surprisePercentage": "9.8655",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2022-12-31",
//             "reportedDate": "2023-01-24",
//             "reportedEPS": "2.32",
//             "estimatedEPS": "2.29",
//             "surprise": "0.03",
//             "surprisePercentage": "1.31",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2022-09-30",
//             "reportedDate": "2022-10-25",
//             "reportedEPS": "2.35",
//             "estimatedEPS": "2.3",
//             "surprise": "0.05",
//             "surprisePercentage": "2.1739",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2022-06-30",
//             "reportedDate": "2022-07-26",
//             "reportedEPS": "2.23",
//             "estimatedEPS": "2.29",
//             "surprise": "-0.06",
//             "surprisePercentage": "-2.6201",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2022-03-31",
//             "reportedDate": "2022-04-26",
//             "reportedEPS": "2.22",
//             "estimatedEPS": "2.19",
//             "surprise": "0.03",
//             "surprisePercentage": "1.3699",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2021-12-31",
//             "reportedDate": "2022-01-25",
//             "reportedEPS": "2.48",
//             "estimatedEPS": "2.31",
//             "surprise": "0.17",
//             "surprisePercentage": "7.3593",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2021-09-30",
//             "reportedDate": "2021-10-26",
//             "reportedEPS": "2.27",
//             "estimatedEPS": "2.07",
//             "surprise": "0.2",
//             "surprisePercentage": "9.6618",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2021-06-30",
//             "reportedDate": "2021-07-27",
//             "reportedEPS": "2.17",
//             "estimatedEPS": "1.92",
//             "surprise": "0.25",
//             "surprisePercentage": "13.0208",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2021-03-31",
//             "reportedDate": "2021-04-27",
//             "reportedEPS": "1.95",
//             "estimatedEPS": "1.78",
//             "surprise": "0.17",
//             "surprisePercentage": "9.5506",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2020-12-31",
//             "reportedDate": "2021-01-26",
//             "reportedEPS": "2.03",
//             "estimatedEPS": "1.64",
//             "surprise": "0.39",
//             "surprisePercentage": "23.7805",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2020-09-30",
//             "reportedDate": "2020-10-27",
//             "reportedEPS": "1.82",
//             "estimatedEPS": "1.54",
//             "surprise": "0.28",
//             "surprisePercentage": "18.1818",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2020-06-30",
//             "reportedDate": "2020-07-22",
//             "reportedEPS": "1.46",
//             "estimatedEPS": "1.34",
//             "surprise": "0.12",
//             "surprisePercentage": "8.9552",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2020-03-31",
//             "reportedDate": "2020-04-29",
//             "reportedEPS": "1.4",
//             "estimatedEPS": "1.26",
//             "surprise": "0.14",
//             "surprisePercentage": "11.1111",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2019-12-31",
//             "reportedDate": "2020-01-29",
//             "reportedEPS": "1.51",
//             "estimatedEPS": "1.32",
//             "surprise": "0.19",
//             "surprisePercentage": "14.3939",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2019-09-30",
//             "reportedDate": "2019-10-23",
//             "reportedEPS": "1.38",
//             "estimatedEPS": "1.25",
//             "surprise": "0.13",
//             "surprisePercentage": "10.4",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2019-06-30",
//             "reportedDate": "2019-07-18",
//             "reportedEPS": "1.37",
//             "estimatedEPS": "1.21",
//             "surprise": "0.16",
//             "surprisePercentage": "13.2231",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2019-03-31",
//             "reportedDate": "2019-04-24",
//             "reportedEPS": "1.14",
//             "estimatedEPS": "1",
//             "surprise": "0.14",
//             "surprisePercentage": "14",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2018-12-31",
//             "reportedDate": "2019-01-30",
//             "reportedEPS": "1.1",
//             "estimatedEPS": "1.09",
//             "surprise": "0.01",
//             "surprisePercentage": "0.9174",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2018-09-30",
//             "reportedDate": "2018-10-24",
//             "reportedEPS": "1.14",
//             "estimatedEPS": "0.96",
//             "surprise": "0.18",
//             "surprisePercentage": "18.75",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2018-06-30",
//             "reportedDate": "2018-07-19",
//             "reportedEPS": "1.13",
//             "estimatedEPS": "1.08",
//             "surprise": "0.05",
//             "surprisePercentage": "4.6296",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2018-03-31",
//             "reportedDate": "2018-04-26",
//             "reportedEPS": "0.95",
//             "estimatedEPS": "0.85",
//             "surprise": "0.1",
//             "surprisePercentage": "11.7647",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2017-12-31",
//             "reportedDate": "2018-01-31",
//             "reportedEPS": "0.96",
//             "estimatedEPS": "0.86",
//             "surprise": "0.1",
//             "surprisePercentage": "11.6279",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2017-09-30",
//             "reportedDate": "2017-10-26",
//             "reportedEPS": "0.84",
//             "estimatedEPS": "0.72",
//             "surprise": "0.12",
//             "surprisePercentage": "16.6667",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2017-06-30",
//             "reportedDate": "2017-07-20",
//             "reportedEPS": "0.98",
//             "estimatedEPS": "0.71",
//             "surprise": "0.27",
//             "surprisePercentage": "38.0282",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2017-03-31",
//             "reportedDate": "2017-04-27",
//             "reportedEPS": "0.73",
//             "estimatedEPS": "0.7",
//             "surprise": "0.03",
//             "surprisePercentage": "4.2857",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2016-12-31",
//             "reportedDate": "2017-01-26",
//             "reportedEPS": "0.84",
//             "estimatedEPS": "0.79",
//             "surprise": "0.05",
//             "surprisePercentage": "6.3291",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2016-09-30",
//             "reportedDate": "2016-10-20",
//             "reportedEPS": "0.76",
//             "estimatedEPS": "0.68",
//             "surprise": "0.08",
//             "surprisePercentage": "11.7647",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2016-06-30",
//             "reportedDate": "2016-07-19",
//             "reportedEPS": "0.69",
//             "estimatedEPS": "0.58",
//             "surprise": "0.11",
//             "surprisePercentage": "18.9655",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2016-03-31",
//             "reportedDate": "2016-04-21",
//             "reportedEPS": "0.62",
//             "estimatedEPS": "0.64",
//             "surprise": "-0.02",
//             "surprisePercentage": "-3.125",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2015-12-31",
//             "reportedDate": "2016-01-28",
//             "reportedEPS": "0.78",
//             "estimatedEPS": "0.71",
//             "surprise": "0.07",
//             "surprisePercentage": "9.8592",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2015-09-30",
//             "reportedDate": "2015-10-22",
//             "reportedEPS": "0.67",
//             "estimatedEPS": "0.59",
//             "surprise": "0.08",
//             "surprisePercentage": "13.5593",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2015-06-30",
//             "reportedDate": "2015-07-21",
//             "reportedEPS": "0.6",
//             "estimatedEPS": "0.56",
//             "surprise": "0.04",
//             "surprisePercentage": "7.1429",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2015-03-31",
//             "reportedDate": "2015-04-23",
//             "reportedEPS": "0.61",
//             "estimatedEPS": "0.51",
//             "surprise": "0.1",
//             "surprisePercentage": "19.6078",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2014-12-31",
//             "reportedDate": "2015-01-26",
//             "reportedEPS": "0.75",
//             "estimatedEPS": "0.71",
//             "surprise": "0.04",
//             "surprisePercentage": "5.6338",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2014-09-30",
//             "reportedDate": "2014-10-23",
//             "reportedEPS": "0.54",
//             "estimatedEPS": "0.49",
//             "surprise": "0.05",
//             "surprisePercentage": "10.2041",
//             "reportTime": "post-market"
//         },
//         {
//             "fiscalDateEnding": "2014-06-30",
//             "reportedDate": "2014-07-22",
//             "reportedEPS": "0.55",
//             "estimatedEPS": "0.6",
//             "surprise": "-0.05",
//             "surprisePercentage": "-8.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2014-03-31",
//             "reportedDate": "2014-04-24",
//             "reportedEPS": "0.68",
//             "estimatedEPS": "0.63",
//             "surprise": "0.05",
//             "surprisePercentage": "7.9365",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2013-12-31",
//             "reportedDate": "2014-01-23",
//             "reportedEPS": "0.78",
//             "estimatedEPS": "0.68",
//             "surprise": "0.1",
//             "surprisePercentage": "14.7059",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2013-09-30",
//             "reportedDate": "2013-10-24",
//             "reportedEPS": "0.62",
//             "estimatedEPS": "0.54",
//             "surprise": "0.08",
//             "surprisePercentage": "14.8148",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2013-06-30",
//             "reportedDate": "2013-07-18",
//             "reportedEPS": "0.66",
//             "estimatedEPS": "0.75",
//             "surprise": "-0.09",
//             "surprisePercentage": "-12",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2013-03-31",
//             "reportedDate": "2013-04-18",
//             "reportedEPS": "0.72",
//             "estimatedEPS": "0.68",
//             "surprise": "0.04",
//             "surprisePercentage": "5.8824",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2012-12-31",
//             "reportedDate": "2013-01-24",
//             "reportedEPS": "0.76",
//             "estimatedEPS": "0.75",
//             "surprise": "0.01",
//             "surprisePercentage": "1.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2012-09-30",
//             "reportedDate": "2012-10-18",
//             "reportedEPS": "0.53",
//             "estimatedEPS": "0.56",
//             "surprise": "-0.03",
//             "surprisePercentage": "-5.3571",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2012-06-30",
//             "reportedDate": "2012-07-19",
//             "reportedEPS": "0.67",
//             "estimatedEPS": "0.62",
//             "surprise": "0.05",
//             "surprisePercentage": "8.0645",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2012-03-31",
//             "reportedDate": "2012-04-19",
//             "reportedEPS": "0.6",
//             "estimatedEPS": "0.57",
//             "surprise": "0.03",
//             "surprisePercentage": "5.2632",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2011-12-31",
//             "reportedDate": "2012-01-19",
//             "reportedEPS": "0.78",
//             "estimatedEPS": "0.76",
//             "surprise": "0.02",
//             "surprisePercentage": "2.6316",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2011-09-30",
//             "reportedDate": "2011-10-20",
//             "reportedEPS": "0.68",
//             "estimatedEPS": "0.68",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2011-06-30",
//             "reportedDate": "2011-07-21",
//             "reportedEPS": "0.69",
//             "estimatedEPS": "0.58",
//             "surprise": "0.11",
//             "surprisePercentage": "18.9655",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2011-03-31",
//             "reportedDate": "2011-04-28",
//             "reportedEPS": "0.61",
//             "estimatedEPS": "0.56",
//             "surprise": "0.05",
//             "surprisePercentage": "8.9286",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2010-12-31",
//             "reportedDate": "2011-01-27",
//             "reportedEPS": "0.77",
//             "estimatedEPS": "0.68",
//             "surprise": "0.09",
//             "surprisePercentage": "13.2353",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2010-09-30",
//             "reportedDate": "2010-10-28",
//             "reportedEPS": "0.62",
//             "estimatedEPS": "0.55",
//             "surprise": "0.07",
//             "surprisePercentage": "12.7273",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2010-06-30",
//             "reportedDate": "2010-07-22",
//             "reportedEPS": "0.51",
//             "estimatedEPS": "0.46",
//             "surprise": "0.05",
//             "surprisePercentage": "10.8696",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2010-03-31",
//             "reportedDate": "2010-04-22",
//             "reportedEPS": "0.45",
//             "estimatedEPS": "0.42",
//             "surprise": "0.03",
//             "surprisePercentage": "7.1429",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2009-12-31",
//             "reportedDate": "2010-01-28",
//             "reportedEPS": "0.74",
//             "estimatedEPS": "0.59",
//             "surprise": "0.15",
//             "surprisePercentage": "25.4237",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2009-09-30",
//             "reportedDate": "2009-10-23",
//             "reportedEPS": "0.4",
//             "estimatedEPS": "0.32",
//             "surprise": "0.08",
//             "surprisePercentage": "25",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2009-06-30",
//             "reportedDate": "2009-07-23",
//             "reportedEPS": "0.36",
//             "estimatedEPS": "0.36",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2009-03-31",
//             "reportedDate": "2009-04-23",
//             "reportedEPS": "0.39",
//             "estimatedEPS": "0.39",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2008-12-31",
//             "reportedDate": "2009-01-22",
//             "reportedEPS": "0.47",
//             "estimatedEPS": "0.49",
//             "surprise": "-0.02",
//             "surprisePercentage": "-4.0816",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2008-09-30",
//             "reportedDate": "2008-10-23",
//             "reportedEPS": "0.48",
//             "estimatedEPS": "0.47",
//             "surprise": "0.01",
//             "surprisePercentage": "2.1277",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2008-06-30",
//             "reportedDate": "2008-07-17",
//             "reportedEPS": "0.46",
//             "estimatedEPS": "0.47",
//             "surprise": "-0.01",
//             "surprisePercentage": "-2.1277",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2008-03-31",
//             "reportedDate": "2008-04-24",
//             "reportedEPS": "0.47",
//             "estimatedEPS": "0.44",
//             "surprise": "0.03",
//             "surprisePercentage": "6.8182",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2007-12-31",
//             "reportedDate": "2008-01-24",
//             "reportedEPS": "0.5",
//             "estimatedEPS": "0.46",
//             "surprise": "0.04",
//             "surprisePercentage": "8.6957",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2007-09-30",
//             "reportedDate": "2007-10-25",
//             "reportedEPS": "0.45",
//             "estimatedEPS": "0.39",
//             "surprise": "0.06",
//             "surprisePercentage": "15.3846",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2007-06-30",
//             "reportedDate": "2007-07-19",
//             "reportedEPS": "0.39",
//             "estimatedEPS": "0.39",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2007-03-31",
//             "reportedDate": "2007-04-26",
//             "reportedEPS": "0.49",
//             "estimatedEPS": "0.46",
//             "surprise": "0.03",
//             "surprisePercentage": "6.5217",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2006-12-31",
//             "reportedDate": "2007-01-25",
//             "reportedEPS": "0.26",
//             "estimatedEPS": "0.23",
//             "surprise": "0.03",
//             "surprisePercentage": "13.0435",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2006-09-30",
//             "reportedDate": "2006-10-26",
//             "reportedEPS": "0.35",
//             "estimatedEPS": "0.31",
//             "surprise": "0.04",
//             "surprisePercentage": "12.9032",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2006-06-30",
//             "reportedDate": "2006-07-20",
//             "reportedEPS": "0.31",
//             "estimatedEPS": "0.3",
//             "surprise": "0.01",
//             "surprisePercentage": "3.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2006-03-31",
//             "reportedDate": "2006-04-27",
//             "reportedEPS": "0.32",
//             "estimatedEPS": "0.33",
//             "surprise": "-0.01",
//             "surprisePercentage": "-3.0303",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2005-12-31",
//             "reportedDate": "2006-01-26",
//             "reportedEPS": "0.33",
//             "estimatedEPS": "0.33",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2005-09-30",
//             "reportedDate": "2005-10-27",
//             "reportedEPS": "0.31",
//             "estimatedEPS": "0.3",
//             "surprise": "0.01",
//             "surprisePercentage": "3.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2005-06-30",
//             "reportedDate": "2005-07-21",
//             "reportedEPS": "0.32",
//             "estimatedEPS": "0.31",
//             "surprise": "0.01",
//             "surprisePercentage": "3.2258",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2005-03-31",
//             "reportedDate": "2005-04-28",
//             "reportedEPS": "0.32",
//             "estimatedEPS": "0.32",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2004-12-31",
//             "reportedDate": "2005-01-27",
//             "reportedEPS": "0.35",
//             "estimatedEPS": "0.33",
//             "surprise": "0.02",
//             "surprisePercentage": "6.0606",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2004-09-30",
//             "reportedDate": "2004-10-21",
//             "reportedEPS": "0.31",
//             "estimatedEPS": "0.3",
//             "surprise": "0.01",
//             "surprisePercentage": "3.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2004-06-30",
//             "reportedDate": "2004-07-22",
//             "reportedEPS": "0.28",
//             "estimatedEPS": "0.29",
//             "surprise": "-0.01",
//             "surprisePercentage": "-3.4483",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2004-03-31",
//             "reportedDate": "2004-04-22",
//             "reportedEPS": "0.34",
//             "estimatedEPS": "0.29",
//             "surprise": "0.05",
//             "surprisePercentage": "17.2414",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2003-12-31",
//             "reportedDate": "2004-01-22",
//             "reportedEPS": "0.34",
//             "estimatedEPS": "0.3",
//             "surprise": "0.04",
//             "surprisePercentage": "13.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2003-09-30",
//             "reportedDate": "2003-10-23",
//             "reportedEPS": "0.3",
//             "estimatedEPS": "0.29",
//             "surprise": "0.01",
//             "surprisePercentage": "3.4483",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2003-06-30",
//             "reportedDate": "2003-07-17",
//             "reportedEPS": "0.23",
//             "estimatedEPS": "0.24",
//             "surprise": "-0.01",
//             "surprisePercentage": "-4.1667",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2003-03-31",
//             "reportedDate": "2003-04-15",
//             "reportedEPS": "0.27",
//             "estimatedEPS": "0.24",
//             "surprise": "0.03",
//             "surprisePercentage": "12.5",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2002-12-31",
//             "reportedDate": "2003-01-16",
//             "reportedEPS": "0.27",
//             "estimatedEPS": "0.23",
//             "surprise": "0.04",
//             "surprisePercentage": "17.3913",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2002-09-30",
//             "reportedDate": "2002-10-17",
//             "reportedEPS": "0.28",
//             "estimatedEPS": "0.21",
//             "surprise": "0.07",
//             "surprisePercentage": "33.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2002-06-30",
//             "reportedDate": "2002-07-18",
//             "reportedEPS": "0.21",
//             "estimatedEPS": "0.21",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2002-03-31",
//             "reportedDate": "2002-04-18",
//             "reportedEPS": "0.25",
//             "estimatedEPS": "0.25",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2001-12-31",
//             "reportedDate": "2002-01-17",
//             "reportedEPS": "0.25",
//             "estimatedEPS": "0.21",
//             "surprise": "0.04",
//             "surprisePercentage": "19.0476",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2001-09-30",
//             "reportedDate": "2001-10-18",
//             "reportedEPS": "0.22",
//             "estimatedEPS": "0.2",
//             "surprise": "0.02",
//             "surprisePercentage": "10",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2001-06-30",
//             "reportedDate": "2001-07-19",
//             "reportedEPS": "0.22",
//             "estimatedEPS": "0.21",
//             "surprise": "0.01",
//             "surprisePercentage": "4.7619",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2001-03-31",
//             "reportedDate": "2001-04-19",
//             "reportedEPS": "0.22",
//             "estimatedEPS": "0.21",
//             "surprise": "0.01",
//             "surprisePercentage": "4.7619",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2000-12-31",
//             "reportedDate": "2001-01-18",
//             "reportedEPS": "0.24",
//             "estimatedEPS": "0.23",
//             "surprise": "0.01",
//             "surprisePercentage": "4.3478",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2000-09-30",
//             "reportedDate": "2000-10-18",
//             "reportedEPS": "0.23",
//             "estimatedEPS": "0.21",
//             "surprise": "0.02",
//             "surprisePercentage": "9.5238",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2000-06-30",
//             "reportedDate": "2000-07-18",
//             "reportedEPS": "0.22",
//             "estimatedEPS": "0.21",
//             "surprise": "0.01",
//             "surprisePercentage": "4.7619",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "2000-03-31",
//             "reportedDate": "2000-04-20",
//             "reportedEPS": "0.22",
//             "estimatedEPS": "0.2",
//             "surprise": "0.02",
//             "surprisePercentage": "10",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1999-12-31",
//             "reportedDate": "2000-01-18",
//             "reportedEPS": "0.24",
//             "estimatedEPS": "0.21",
//             "surprise": "0.03",
//             "surprisePercentage": "14.2857",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1999-09-30",
//             "reportedDate": "1999-10-19",
//             "reportedEPS": "0.19",
//             "estimatedEPS": "0.17",
//             "surprise": "0.02",
//             "surprisePercentage": "11.7647",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1999-06-30",
//             "reportedDate": "1999-07-19",
//             "reportedEPS": "0.2",
//             "estimatedEPS": "0.18",
//             "surprise": "0.02",
//             "surprisePercentage": "11.1111",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1999-03-31",
//             "reportedDate": "1999-04-20",
//             "reportedEPS": "0.19",
//             "estimatedEPS": "0.16",
//             "surprise": "0.03",
//             "surprisePercentage": "18.75",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1998-12-31",
//             "reportedDate": "1999-01-19",
//             "reportedEPS": "0.18",
//             "estimatedEPS": "0.15",
//             "surprise": "0.03",
//             "surprisePercentage": "20",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1998-09-30",
//             "reportedDate": "1998-10-20",
//             "reportedEPS": "0.14",
//             "estimatedEPS": "0.12",
//             "surprise": "0.02",
//             "surprisePercentage": "16.6667",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1998-06-30",
//             "reportedDate": "1998-07-16",
//             "reportedEPS": "0.13",
//             "estimatedEPS": "0.12",
//             "surprise": "0.01",
//             "surprisePercentage": "8.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1998-03-31",
//             "reportedDate": "1998-04-22",
//             "reportedEPS": "0.13",
//             "estimatedEPS": "0.12",
//             "surprise": "0.01",
//             "surprisePercentage": "8.3333",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1997-12-31",
//             "reportedDate": "1998-01-21",
//             "reportedEPS": "0.11",
//             "estimatedEPS": "0.1",
//             "surprise": "0.01",
//             "surprisePercentage": "10",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1997-09-30",
//             "reportedDate": "1997-10-20",
//             "reportedEPS": "0.09",
//             "estimatedEPS": "0.09",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1997-06-30",
//             "reportedDate": "1997-07-17",
//             "reportedEPS": "0.1",
//             "estimatedEPS": "0.1",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1997-03-31",
//             "reportedDate": "1997-04-17",
//             "reportedEPS": "0.1",
//             "estimatedEPS": "0.08",
//             "surprise": "0.02",
//             "surprisePercentage": "25",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1996-12-31",
//             "reportedDate": "1997-01-17",
//             "reportedEPS": "0.07",
//             "estimatedEPS": "0.06",
//             "surprise": "0.01",
//             "surprisePercentage": "16.6667",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1996-09-30",
//             "reportedDate": "1996-10-21",
//             "reportedEPS": "0.06",
//             "estimatedEPS": "0.06",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1996-06-30",
//             "reportedDate": "1996-07-22",
//             "reportedEPS": "0.05",
//             "estimatedEPS": "0.05",
//             "surprise": "0",
//             "surprisePercentage": "0",
//             "reportTime": "pre-market"
//         },
//         {
//             "fiscalDateEnding": "1996-03-31",
//             "reportedDate": "1996-04-18",
//             "reportedEPS": "0.06",
//             "estimatedEPS": "0.05",
//             "surprise": "0.01",
//             "surprisePercentage": "20",
//             "reportTime": "pre-market"
//         }
//     ]
// }