import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false

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
                    className=' w-full border-2 border-solid outline-none border-black rounded-md px-2 py-1 bg-transparent' 
                    type="number" 
                    disabled={amountDisable}
                    value={amount} 
                    placeholder='0.00'
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}

                    />
                </div>
                <div className='w-full text-right'>
                    <select 
                        className="bg-gray-300 font-medium px-2 py-1 rounded-lg outline-none" 
                        value={selectCurrency}
                        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                            {currencyOptions.map((curr)=> (<option key={curr} value={curr}>{curr}</option>))}
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default InputBox