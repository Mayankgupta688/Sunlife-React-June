import { Component, PureComponent } from 'react';

export default class ParentComponentClass extends Component {
    constructor() {
        super();
        this.state = {
            timer: 100,
            employee: {
                name: "Mayank",
                age: 30,
                designation: "Developer",
                salary: 10000
            }, salary: [1, 2, 3, 4]
        }
    }

    updateData = () => {
        this.setState({
            employee: {
                ...this.state.employee,
                age: this.state.employee.age + 1
            },
            timer: this.state.timer + 1,
            salary: [1, 2, 3, 4]
        })
    }

    updateDataParameter = (newSalary) => {
        debugger;
        this.setState({
            employee: {
                ...this.state.employee,
                age: this.state.employee.age + 1
            },
            timer: this.state.timer + 1,
            salary: [...this.state.salary, newSalary]
        })
    }

    render() {
        return (
            <div>
                <h1>The count is {this.state.timer}</h1>
                <h2>The user Name is {this.state.employee.name}</h2>
                <label>User Age is {this.state.employee.name + " " + this.state.employee.age}</label><br/><br/>
                <input type="button" value="Click to Transfer Data" onClick={this.updateData} /> <hr/>
                <ChildComponent salary={[...this.state.salary]} 
                    updateDataParameter={this.updateDataParameter} 
                    {...this.state.employee} updateData={this.updateData} 
                    count={this.state.timer} userName="Mayank"></ChildComponent>

                    <GrandChild></GrandChild>
            </div>
        )
    }
}

export class ChildComponent extends Component {

    constructor(props) {
        super(props);
        alert(this.props.count)
        alert(props.count)
        this.newFunction = function() { this.props.updateDataParameter(100)}.bind(this);
        this.state = {
            myNewName: "Sample",
            myAddress: "Delhi"
        }
    }

    render() {
        return (
            <>
                <h2>This is the Class Component {this.props.count}</h2>
                <h2>The user Name is {this.props.name}</h2>
                <h4>Employee Age is {this.props.name + " " + this.props.age}</h4>
                <input type="button" value="Lifting the state up" onClick={this.props.updateData} />

                <input type="button" value="Lifting the state up" onClick={function() { this.props.updateDataParameter(100)}.bind(this)} />
                <input type="button" value="Lifting the state up" onClick={() => this.props.updateDataParameter(100)} />
                <input type="button" value="Lifting the state up" onClick={this.newFunction} />

                <GrandChild myNewName={this.state.myNewName} myAddress={this.state.myAddress} salary={this.props.salary}></GrandChild>
            </>
        )
    }
}

export function GrandChild(props) {
    return (
        <>
            <h3>Adding User Count Again in Child Child....</h3>
            <h4>My Name is {props.myNewName} and my Address is {props.myAddress}</h4>
            <h4>My Salary is {props.salary}</h4>
        </>
    )
}
