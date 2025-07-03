import "./employee.css";
import {styleObject } from "./employeeStyle.js"

export function EmployeeList() {
    var empList = [{
        empName: "Maynak",
        empId: 0
    }, {
        empName: "Anshul",
        empId: 1
    }, {
        empName: "Meha",
        empId: 2
    }, {
        empName: "Meha3",
        empId: 3
    }, {
        empName: "Meha4",
        empId: 4
    }, {
        empName: "Meha56",
        empId: 5
    }, {
        empName: "Meha7",
        empId: 6
    }];

    var renderData = true;

    function iterateEmployees() {
        return empList.map(function(employee) { 
            return <h1 key={employee.empId}>My Logical Employee Name is: {employee.empName}</h1> 
        })
    }

    function renderLogicalBlock() {
        if(empList.length < 10 && renderData === true) {
            return (
                <>
                    <h1 style={styleObject} className="add_color_header">Logical Function: The company size is comaritively Small</h1>
                    <h2 style={{color: "purple", border: "1px solid blue", marginBottom: "5px", padding: "10px"}} className="add_color">Logical Function: This is Mayank Gupta</h2>
                </>
            )
        } else {
            return <h1>The company size is comaritively Fine</h1>
        }
    }

    return (
        <>
            {iterateEmployees()}
            {renderLogicalBlock()}
        </>
    )
}