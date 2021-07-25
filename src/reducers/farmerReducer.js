
export default function farmerReducer(state = {farmers: []}, action) {

    switch(action.type) {
        case 'FETCH_FARMERS':
            return {...state, farmers: action.payload}
            case 'ADD_FARMER':
                return {...state, farmers: [...state.farmers, action.payload]}
        default:
            return state
    }
        
}