export function addRoute(csat) {
    console.log(csat);
    return dispatch => {
        dispatch({ type: "ADD_ROUTE", payload: { counter: 0, csat } })
    }
}
