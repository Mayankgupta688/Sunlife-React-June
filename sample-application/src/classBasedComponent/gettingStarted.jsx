import { Component } from "react";

export class GettingStarted extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.userName = "Mayank Gupta";
        this.count = 100;
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        ++this.count;
    }

    render() {
        return (
            <>
                <h1>The User using the Application is {this.userName}</h1>
                <h2>Count is: {this.state.count}</h2>
                <h2>Non Reactive Count is: {this.count}</h2>
                <input type="button" value="Click to Increment Count" onClick={this.updateCount} />
            </>
        )
    }
}