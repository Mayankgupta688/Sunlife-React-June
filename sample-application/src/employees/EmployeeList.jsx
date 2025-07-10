import "./employee.css";
import {styleObject } from "./employeeStyle.js"

export function EmployeeList() {
    var empList = [{
        empName: "Mayank",
        empId: 0,
        designation: "Developer"
    }, {
        empName: "Anshul",
        empId: 1,
        designation: "Manager"
    }, {
        empName: "Meha",
        empId: 2,
        designation: "Architect"
    }, {
        empName: "Meha3",
        empId: 3,
        designation: "Owner"
    }];

    var renderData = true;

    function iterateEmployees() {
        return empList.map(function(employee) {     
            return <h1 className={employee.empId % 2 === 0 ? "add_color_blue" : "add_color_grey"} key={employee.empId}>My Logical Employee Name is: {employee.empName}</h1> 
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