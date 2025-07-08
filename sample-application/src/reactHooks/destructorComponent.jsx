import React, { useState, useEffect } from "react";

export default function DestructorComponent() {
    var [count, setCount] = useState(1000);

    useEffect(() => {
        // Constructor Function

        return function() {
            // Destructor Function
        }
    }, []);

    useEffect(() => {
        var myInterval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return function() {
            // Cleanup Function...
            clearInterval(myInterval);
        }
    }, [count]);

    return (
        <>
            <h1>Counter Value is {count}</h1>
        </>
    );
}