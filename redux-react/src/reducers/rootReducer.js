import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import flightReducer from "./flightReducer";
import movieReducer from "./movieReducer";

var rootReducer = combineReducers({
    employees: employeeReducer,
    flights: flightReducer,
    movieStore: movieReducer
})

export default rootReducer;