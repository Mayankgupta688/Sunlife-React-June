import { useState, useEffect, useRef } from "react";
import Axios from "axios";

export default function useCustom(stockUrl) {
    var [price, setPrice] = useState(0);
    var [stockData, setStockData] = useState({});
    var [color, setColor] = useState("green");
    var oldPrice = useRef("green");

    useEffect(function() {
        setTimeout(() => {
            Axios.get(stockUrl).then((response) => {
                setPrice(response.data.data['pricecurrent']);
                setStockData(response.data.data);
            })
        }, 1000);
    })

    useEffect(() => {
        if(oldPrice.current > stockData.pricecurrent) {
            setColor("red");
            oldPrice.current = stockData.pricecurrent;
        } else if(oldPrice.current < stockData.pricecurrent) {
            setColor("green");
            oldPrice.current = stockData.pricecurrent;
        }
    }, [stockData])

    return [price, color, stockData];
}