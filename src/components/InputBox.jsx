import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false

}) {
  return (
    <>
        <div className='bg-white flex flex-col gap-5 mt-auto max-w-screen-sm mx-auto rounded-xl p-4'>
            <div className='w-full flex font-semibold justify-between'>
                <div className='text-gray-600'><p>{label}</p></div>
                <div className='text-gray-600'><p>Currency Type</p></div>
            </div>

            <div className='w-full flex'>
                <div className='w-full'>
                    <input 
                    type="number" 
                    className=' w-full border-none outline-none bg-transparent' 
                    disabled={amountDisabled}
                    value={amount} 
                    />
                </div>
                <div className='w-full text-right'>
                    <select className="bg-gray-300 font-medium px-2 py-1 rounded-lg outline-none" name="currency">
                        <option>
                            USD
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default InputBox