import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    useEffect(()=>{
        const [data, setData] = useState({})

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        console.log(data);
    }, [currency])

    return data;
}

module.exports = useCurrencyInfo;