

export default function customerReducer(state = {customers: []}, action) {

    switch(action.type) {
        case 'FETCH_CUSTOMERS':
            return {customers: action.payload}
        default:
            return state
    }
        
}