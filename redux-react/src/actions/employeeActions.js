import axios from 'axios';

export function addEmployees(empList) {
    debugger;
    return {
        type: 'ADD_EMPLOYEES',
        payload: empList
    }
}

export function deleteAllEmployees() {
    return {
        type: 'DELETE_EMPLOYEES'
    }
}

export function deleteEmployeeById(employeeId) {
    return {
        type: 'DELETE_EMPLOYEE_WITHID',
        payload: employeeId
    }
}

export function loadEmployeeData() {
    debugger;
    return function(dispatch) {
        return axios.get('http://localhost:8000/empList').then(response => {
            dispatch(addEmployees(response.data));
        })
    }
}