import { useCallback, useMemo, useState } from "react";

export default function CallbackHook() {
    var [count, setCount] = useState(7000000000);
    var [changeCount, setChangeCount] = useState(0);
    
    var incrementCount = () => {
        setCount(count + 1);
    }

    var decrementCount = () => {
        setCount(count - 1);
    }

    const addValue = useCallback((inputValue) => {
        var sum = 0;
        for(let i = 0; i < inputValue; i++) {
            sum += i;
        }

        return sum;
    }, []);

    const memoizedSum = useMemo(() => addValue(count), [count]);

    return (
        <div>
            <h1>The Count value is {count} and sum is {memoizedSum}</h1>
            <input type="button" value="Increment Count" onClick={incrementCount} />
            <input type="button" value="Decrement Count" onClick={decrementCount} />
        </div>
    )
}