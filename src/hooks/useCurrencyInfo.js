import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates); // `res.rates` contains the exchange rates
            });
    }, [fromCurrency]);

    return data;
}

export default useCurrencyInfo;
