import  { useState, useEffect, use} from "react";
import StockDetails from "./stockDetails";

export default function StockData() {

    var stockValues = [{
            stockName: "NAC",
            stockValue: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC"
        },{
            stockName: "AP26",
            stockValue: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/AP26"
        },{
            stockName: "RK01",
            stockValue: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/RK01"
        },{
            stockName: "SBI",
            stockValue: "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI"
        }]

    return (
        <>
           <h1>These are the Stocks Selected by the Client</h1><hr/>
           {stockValues.map(function(stockData) {
                return (
                    <>
                        <StockDetails stockUrl={stockData.stockValue} key={stockData.stockName} />
                        <hr/>
                    </>
                )
            })
           } 
        </>
    )
}   