import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setTo(from)
    setFrom(to)

    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = ()=>{
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  return (
    <div className='w-full h-screen flex justify-center bg-center bg-cover'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')`}}
    >
      <div className='w-1/2 h-auto m-auto mt-auto p-10 backdrop-blur-sm rounded-2xl border-2 border-white'>
        <div className='mb-1'>
          <InputBox
          amount={amount} 
          label={"From"} 
          currencyOptions={options} 
          seletCurrency={from}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          />
        </div>
        <div className='w-full h-0.5'>
          <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>Swap</button>
        </div>
        <div className='mt-1 mb-4'>
          <InputBox 
          amount={convertedAmount} 
          amountDisable 
          label={"To"} 
          currencyOptions={options} 
          seletCurrency={to}
          onCurrencyChange={(currency)=> setTo(currency)}
          />
        </div>
        <button onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  )
}

export default App