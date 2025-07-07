import  { useState, useEffect} from "react";
import Axios from "axios";

export default function StockData() {
    var [sbiStockPrice, setSbiStockPrice] = useState(0);

    useEffect(function() {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI")
                .then((response) => {
                    setSbiStockPrice(response.data.data.pricecurrent);
                })
        }, 2000);
    }, [])

    return (
        <h1>SBI Stock Value: {sbiStockPrice}</h1>
    )
}   