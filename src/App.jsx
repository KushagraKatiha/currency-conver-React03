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
    <div className='w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}
    >
      <div className='w-1/2 h-auto m-auto mt-auto p-9 backdrop-blur-lg rounded-2xl'>
        <div className='mb-1'>
          <InputBox/>
        </div>
        <div className='w-full h-0.5'>
          <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>Swap</button>
        </div>
        <div className='mt-1'>
          <InputBox/>
        </div>
      </div>
    </div>
  )
}

export default App