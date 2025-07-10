export default function employeeReducer(employeeStore = [], action) {
    debugger;
    if(action.type === "ADD_EMPLOYEES") {
        return action?.payload?.length > 0 ? action.payload : []
    }

    if(action.type === "DELETE_EMPLOYEES") {
        return []
    }

    return employeeStore;
}