import React from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const curr = "inr"
  const currencyInfo = useCurrencyInfo(curr)
  
  // const options = {
  //   "kushagra": "this is kushagra",
  //   "inr": {
  //     "00": 0.18425652,
  //     "1inch": 0.041968179,
  //     "aave": 0.0001333037,
  //     "abt": 0.17425707,
  //     "ach": 0.83474272,
  //     "acs": 5.43803265,
  //     "ada": 0.041853685,
  //     "aed": 0.044215222,
  //     "aergo": 0.099226731,
  //     "afn": 0.90729498,
  //     "agld": 0.01270299,
  //     "aioz": 0.95187066,
  //     "akt": 0.012692628,
  //     "alcx": 0.00092446555,
  //     "aleph": 0.18453891,
  //     "algo": 0.12049903,
  //     "alice": 0.01522271,
  //     "all": 1.19139567,
  //     "amd": 4.80715618,
  //     "amp": 7.82642423,
  //     "ang": 0.021632335,
  //     "ankr": 0.53887509,
  // }}

  // const optionList = Object.keys(options["inr"])

  return (
    <InputBox
              label="To"
              // amount={convertedAmount}
              // currencyOptions={optionList}
              // onCurrencyChange={(currency)=>{
              //   setTo(currency)
              // }}
              // selectCurrency={from}
              // amountDisable
            />
  )
}

export default App