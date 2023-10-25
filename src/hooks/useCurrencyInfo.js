import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            let response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            response = await response.json()
            setData(Object.keys(response[currency]))
        }
        fetchData()
    }, [currency])
    
    return data;
}
export default useCurrencyInfo;


