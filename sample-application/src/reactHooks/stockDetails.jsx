import  { useState, useEffect, useRef} from "react";
import Axios from "axios";

export default function StockDetails(props) {
    var [stockData, setStockData] = useState({});
    var [stockColor, setStockColor] = useState("green");
    var lastPrice = useRef(0);

    useEffect(function() {

        // Component is Mounted

        setInterval(() => {
            debugger;
            Axios.get(props.stockUrl)
                .then((response) => {
                    setStockData(response.data.data);
                })
        }, 5000);

        // Use when Component Unmounted

        return function() {
            debugger;
            alert("Component is Unmounted");
        }
    }, []);

    useEffect(function() {
        if(lastPrice.current > stockData['pricecurrent']) {
            setStockColor("red");
            lastPrice.current = stockData['pricecurrent']
        } else if(lastPrice.current < stockData['pricecurrent']) {
            setStockColor("green");
            lastPrice.current = stockData['pricecurrent']
        }

        return function() {
            alert("Component is going to Update, beacuse of change to stockData");
        }
    }, [stockData])

    return (
        <>
            <h1 style={{color: stockColor}}>Stock Price of {stockData['SC_FULLNM']} is {stockData['pricecurrent']}</h1>
            <h2>
                Price of the Stock was {stockData['priceprevclose']}</h2>
        </>
    )
}   