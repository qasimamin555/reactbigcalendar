

const INITIAL_STATE = {
    eventData:[]
}

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case "eventList":
            return ({
                ...state,
               eventData:action.payload
            })
    }
    return state
}