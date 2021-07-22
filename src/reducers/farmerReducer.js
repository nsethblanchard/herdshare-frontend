
export default function farmerReducer(state = {farmers: []}, action) {

    switch(action.type) {
        case 'FETCH_FARMERS':
            return {farmers: action.payload}
        default:
            return state
    }
        
}