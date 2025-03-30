import './App.css'
import CurrencyDropdown from './CurrencyDropdown';
import CurrencyContext from './CurrencyContext'
import { useState } from 'react'

function App() {
  // what values do you want to pass in?
  // do you have the values here in App?
  // where are they currently at?
  // can you shift them over here instead?

  const [fromCurrency, setFromCurrency] = useState("SGD")
  const [toCurrency, setToCurrency] = useState("USD")

  return (
    <CurrencyContext.Provider value={{ 
      fromCurrency,
      setFromCurrency,
      toCurrency,
      setToCurrency 
    }}>
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
    </CurrencyContext.Provider>
  )
}

export default App;
