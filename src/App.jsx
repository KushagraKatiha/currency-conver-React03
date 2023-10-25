import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  console.log(currencyInfo);
  
  const optionList = Object.keys(currencyInfo)

  return (
    <InputBox
              label="To"
              amount={amount}
              currencyOptions={optionList}
              // onCurrencyChange={(currency)=>{
              //   setTo(currency)
              // }}
              // selectCurrency={from}
              // amountDisable
            />
  )
}

export default App