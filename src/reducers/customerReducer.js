

export default function customerReducer(state = {customers: []}, action) {

    switch(action.type) {
        case 'FETCH_CUSTOMERS':
            return {...state, customers: action.payload}
        case 'ADD_CUSTOMER':
            return {...state, customers: [...state.customers, action.payload]}
        default:
            return state
    }
        
}