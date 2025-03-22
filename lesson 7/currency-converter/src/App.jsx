import './App.css'

function App() {
  function handleClick(event) {
    alert(`I have selected option: ${event.target.value}`);
  }

  function handleHover (){
    alert('hovering in action')

  }
  return (
    <>
      <h1>Currency Converter</h1>
      <button onMouseEnter={handleHover}>
        Click me
     </button>

      <select name="currency" id="currencySelect" onChange={handleClick}>
    <option value="usd">USD</option>
    <option value="jpy">JPY</option>
    <option value="sgd">SGD</option>
    <option value="myr">MYR</option>
</select>
    </>
  )
}

export default App;
