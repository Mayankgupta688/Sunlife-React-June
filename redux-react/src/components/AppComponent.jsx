import empList from '../data/emplLIst';
import { connect } from 'react-redux';
import * as employeeActions from '../actions/employeeActions';
import GetEmployeeLength from './GetEmployeeLength.jsx';
function AppComponent(props) {
    debugger;
    function addEmployee() {
        debugger;
        props.addEmployees(empList)
    } 
    
    function deleteEmployee() {
        debugger;
        //Action triggered from React Component
        props.deleteAllEmployees(empList)
    } 

    return (
        <>
            <h1>Following is the Employee List</h1>
            <GetEmployeeLength></GetEmployeeLength>
            <input type="button" value="Click To Add Employee" onClick={addEmployee} />
            <input type="button" value="Click To Delete All" onClick={deleteEmployee} />
            {props.employees.map((employee) => {
                return (
                    <>
                        <h2>Employee Name is: {employee.name}</h2>
                    </>
            )})}
        </>
    )
}

function mapStoreToProps(store) {
    return {
        employees: store.employees
    }
}

export default connect(mapStoreToProps, employeeActions)(AppComponent);