import React , {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = [],
    seletCurrency,
}){

    let uniqueId = useId()
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
                    id={uniqueId}
                    className=' w-full border-2 outline-none rounded-md px-2 py-1 bg-transparent' 
                    type="number"
                    placeholder='Amount'
                    value={amount}
                    onChange={(e)=>{
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                    disabled={amountDisable}

                    />
                </div>
                <div className='w-full text-right'>
                    <select 
                        name={uniqueId}
                        className="bg-gray-100 font-medium px-2 py-1 rounded-lg outline-none" 
                        value={seletCurrency}
                        onChange={(e)=>{
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }}
                        disabled={currencyDisable}
                    >
                            {currencyOptions.map((currency)=> (<option key={currency} value={currency}>{currency}</option>))}
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default InputBox