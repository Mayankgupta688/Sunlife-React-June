import { Component } from "react"
import Axios from "axios"
import TwoWayDataBind from "./twoWayDataBind";

export default class EmployeeList extends Component {
    constructor() {
        super();
        this.state = {
            employeeList: [],
            count: 0
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.getEmployeeData = this.getEmployeeData.bind(this)
    }

    deleteEmployee(event) {
        var employeeToDelete = event.target.dataset.info;
        Axios.delete("http://localhost:8000/employees/" + employeeToDelete).then(() => {
            this.getEmployeeData();
        })
    }

    render() {
        return (
            <>
                <h1>Company Employee List {this.state.employeeList.length}:</h1>
                <div style={{maxHeight: '300px', overflowY: "auto"}}>
                    {this.state.employeeList.map((employee) => {
                        return (
                            <>
                                <h2>The Employee Name is: {employee.userName}</h2>
                                <input data-info={employee.id} onClick={this.deleteEmployee} type="button" value={"Delete: " + employee.userName} />
                            </>
                        )
                    })}
                </div><hr/><hr/>

                <TwoWayDataBind
                    getEmployeeData={this.getEmployeeData}
                    count={this.state.count}>
                </TwoWayDataBind>
            </>
        )
    }

    getEmployeeData() {
         Axios.get("http://localhost:8000/employees").then((response) => {
            if(response.status === 200 && response.data.length > 0) {
                this.setState({
                    employeeList: response.data,
                    count: response.data.length
                })
            }
        }, () => {
            alert("Not able to get Data")
        })
    }

    componentDidMount() {
        this.getEmployeeData();
    }
}