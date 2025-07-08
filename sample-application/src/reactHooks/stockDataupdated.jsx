import  { useState, useEffect, use} from "react";
import { getLatestTime } from "../services/getLatestTime.js"
import Axios from "axios";

export default function StockData() {
    var [sbiStockPrice, setSbiStockPrice] = useState(0);
    var [count, setCount] = useState(1000)
    var [timer, setTimer] = useState(getLatestTime());

    function updateCounter() {
        setCount(count + 1);
    }

    useEffect(function() {
        debugger;
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI")
                .then((response) => {
                    setSbiStockPrice(response.data.data.pricecurrent);
                })

            setTimer(getLatestTime());
        }, 1000);
    }, [])

    useEffect(function() {
        console.log("Counter Has Updated....")
    }, [count]);

    useEffect(function() {
        console.log("Stock Price Has Updated....")
    }, [sbiStockPrice]);

    useEffect(function() {
        console.log("Stock Price Has Updated....")
    }, [sbiStockPrice, count]);

    useEffect(function() {
        debugger;
        console.log("Stock Price Has Updated....")
    });

    return (
        <>
            <h1>Stock Price of SBI is {sbiStockPrice}</h1>
            <h2>Counter Value is {count}</h2>
            <h3>The Time is: {timer}</h3>
            <input type="button" value="Click to Update Counter" onClick={updateCounter} />
        </>
    )
}   