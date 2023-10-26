import React from 'react'

function InputBox({
    label,
    currencyOptions = []
}){
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
                    />
                </div>
                <div className='w-full text-right'>
                    <select 
                        className="bg-gray-100 font-medium px-2 py-1 rounded-lg outline-none" 
                    >
                            {currencyOptions.map((currency)=> (<option key={currency} >{currency}</option>))}
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default InputBox