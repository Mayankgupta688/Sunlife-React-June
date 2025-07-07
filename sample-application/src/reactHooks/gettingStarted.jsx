import { useState, Component } from "react";
import { getLatestTime } from "../../src/services/getLatestTime.js";

export default function GettingStarted() {
    var [count, setCount] = useState(1000);

    var interval = setInterval(() => {
        setCount(count + 1);
        clearInterval(interval)
    }, 1000);

    function updateCount() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>The Count is {count}</h1>
            <input type="button" value="Click to Change Count" onClick={updateCount} />
        </>
    )
}

export class GettingStartedClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };  

        setInterval(() => {
            this.updateCount();
        }, 1000);
    }

    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <>
                <h1>The Class Count is {this.state.count}</h1>
                <input type="button" value="Click to Change Count" onClick={this.updateCount} />
            </>
        )
    }
}