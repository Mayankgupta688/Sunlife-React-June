import { Component } from 'react';
import ChildComponent from "./parentComponentClass.jsx"

export default class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            employee: {
                name: "Mayank",
                age: 30,
                designation: "Developer",
                salary: 10000
            }
        }
    }

    updateData = () => {
        this.setState({
            employee: {
                ...this.state.employee,
                age: this.state.employee.age + 1
            },
            timer: this.state.timer + 1
        })
    }

    render() {
        return (
            <div>
                <h1>The count is {this.state.timer}</h1>
                <h2>The user Name is {this.state.employee.name}</h2>
                <label>User Age is {this.state.employee.name + " " + this.state.employee.age}</label><br/><br/>
                <input type="button" value="Click to Transfer Data" onClick={this.updateData} /> <hr/>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count={this.state.timer} userName="Mayank1"></ChildComponent>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count={this.state.timer} userName="Mayank2"></ChildComponent>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count={this.state.timer} userName="Mayank3"></ChildComponent>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count={this.state.timer} userName="Mayank4"></ChildComponent>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count="10" userName="TechnoFunnel"></ChildComponent>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count="50" userName="Mayank"></ChildComponent>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count={this.state.timer} userName="Mayank"></ChildComponent>
                <ChildComponent {...this.state.employee} updateData={this.updateData} count={this.state.timer} userName="Mayank"></ChildComponent>
            </div>
        )
    }
}

function ChildComponentOne(props) {
    props.designation = "dakufgsdku";
    props.employeeData.name = "TechnoFunnel";
    return (
        <>
            <h2>Adding User Count Again.... {props.count}</h2>
            <h2>The user Name is {props.employeeData.name}</h2>
            <h4>Employee Age is {props.employeeData.name + " " + props.employeeData.age}</h4>
            <input type="button" value="Click to Change Time" onClick={props.updateData} />
            <ChildChildComponent></ChildChildComponent>
        </>
    )
}

function ChildChildComponent() {
    return (
        <>
            <h3>Adding User Count Again in Child Child....</h3>
        </>
    )
}