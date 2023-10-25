// import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    // const [data, setData] = useState({})

    const data = {}
    // useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>console.log(Object.keys(res)))
        .then((res)=> {
            let output = res[currency]
            return output
        }
        )
        .then(()=>console.log("Second Print:- ",output))
        .then((res)=>data = Object.keys(res.currency))
        
        return data;
    }
    // , [currency])



// export default useCurrencyInfo;


console.log(useCurrencyInfo("inr"))

