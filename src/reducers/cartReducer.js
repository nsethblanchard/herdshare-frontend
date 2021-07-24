

export default function cartReducer(state = {carts: []}, action) {

    switch(action.type) {
        case 'FETCH_CARTS':
            return {...state, carts: action.payload}
        default:
            return state
    }
        
}