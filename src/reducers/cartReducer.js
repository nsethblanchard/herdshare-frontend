

export default function cartReducer(state = {carts: []}, action) {

    switch(action.type) {
        case 'FETCH_CARTS':
            return {carts: action.payload}
        default:
            return state
    }
        
}