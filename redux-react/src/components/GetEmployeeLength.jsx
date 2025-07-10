import { connect } from 'react-redux';

function GetEmployeeLength(props) {
    
    return (
        <>
            <h1>EmployeeList: {props.employees.length}</h1>
        </>
    )
}

function mapStoreToProps(store) {
    return {
        employees: store.employees
    }
}

export default connect(mapStoreToProps)(GetEmployeeLength);