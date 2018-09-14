
// const data = (action) => {
//     console.log(action.payload.csat);
//     return {
//         csat: action.payload.csat
//     }
// }

const reminders = (states = {}, action) => {
    let reminders = null;
    switch (action.type) {
        case "ADD_ROUTE":
            reminders = { ...states, data: action.payload.csat }
            return reminders;
        case "DUMMY":
            console.log("DUMMY", action);
            reminders = { ...states, counter: -1 }
            return reminders;
        case "NEXT":
            let c = (states.counter + 1) % states.data.length;
            reminders = { ...states, counter: c }
            return reminders;
        default:
            return states;
    }
}
export default reminders;