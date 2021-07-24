

export function fetchCarts(action) {
    console.log("hello")
   return (dispatch) => {
    fetch('http://localhost:3000/api/v1/carts')
    .then(resp => resp.json())
    .then(carts => dispatch({
        type: 'FETCH_CARTS',
        payload: carts
    }))
   }
}


