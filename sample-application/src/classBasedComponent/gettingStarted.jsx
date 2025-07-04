import { Component } from "react";

export class GettingStarted extends Component {
    constructor() {
        super();
        this.userName = "Mayank Gupta";
        this.state = {
            count: 50,
            name: "Mayank",
            address: "Rohini",
            company: "Technology",
            salary: [1, 2, 3, 4, 5],
            data: {
                company: "Blackrock"
            }
        }
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount() {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
            salary: [...this.state.salary, this.state.salary.length + 1]
        })
        console.log(this.state.count);
    }

    render() {
        return (
            <>
                <h1>The User using the Application is {this.state.name} {this.state.address}</h1>
                <h2>Company Name is {this.state.data.company}</h2>
                <h2>Count is: {this.state.count}</h2>

                {this.state.salary.map(function(sal) {
                    return <h3>The Salary was {sal}</h3>
                })}

                <input type="button" value="Click to Increment Count 1" onClick={this.updateCount} />
            </>
        )
    }

    componentDidUpdate() {
        alert("Component Updated....")
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.salary.length > 9) {
            return false;
        }

        return true;
    }

    componentDidMount() {
        alert("The Component is Mounted.....")
    }


    componentWillUnmount() {
        alert("Memory will be destroyed....")
    }
}