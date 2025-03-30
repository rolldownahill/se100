import { useState, useEffect, useContext } from 'react'
import CurrencyContext from './CurrencyContext'

const CurrencyConverter = () => {
    const { fromCurrency, toCurrency } = useContext(CurrencyContext)

    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState(2)

    const fakeConversionData = {
        conversion_result: 3.546
    }

    // how can I make an API call to get the converted amount every time
    // the user selects a new fromCurrency, toCurrency or value?
    useEffect(() => {
        // fetch("https://v6.exchangerate-api.com/v6/80eefd8a8a81d7b44915e930/pair/" +
        //     `${fromCurrency}/${toCurrency}/${fromAmount}`)
        // .then((response) => { return response.json() })
        // .then((data) => {
        //     setToAmount(data.conversion_result)
        // })

        // simulate API request to convert the amount
        setToAmount(fakeConversionData.conversion_result * fromAmount)

    }, [fromCurrency, toCurrency, fromAmount])

    return (
        <div className="container">
            <input 
                value={fromAmount}
                placeholder="Enter amount"
                className="converter-input"
                onChange={(event) => {
                    setFromAmount(event.target.value)
                }}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p>{toAmount}</p>
            <p>{toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter