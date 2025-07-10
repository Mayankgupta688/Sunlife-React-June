import useCustom from "./useCustom";

export default function StockDetails() {
    var [nacPrice, nacColor] = useCustom("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC");
    var [sbiPrice, sbiColor] = useCustom("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
    return (
        <>
            <h1 style={{color: nacColor}}>NAC Price is {nacPrice}</h1>
            <h2 style={{color: sbiColor}}>SBI Stock Price is {sbiPrice}</h2>
        </>
    )
}   