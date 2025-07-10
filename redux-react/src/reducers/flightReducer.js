export default function flightReducer(flightStore = [], action) {
    if(action.type === "CANCEL_ALL_FLIGHT") {
        return []
    }

    return flightStore;
}