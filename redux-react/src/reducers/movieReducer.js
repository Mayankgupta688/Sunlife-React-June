export default function movieReducer(movieStore = [], action) {
    if(action.type === "DELETE_ALL_MOVIES") {
        return []
    }

    return movieStore;
}