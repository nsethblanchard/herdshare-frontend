
export function fetchFarmers() {
    return (dispatch) => {
     fetch('http://localhost:3000/api/v1/farmers')
     .then(resp => resp.json())
     .then(farmers => dispatch({
         type: 'FETCH_FARMERS',
         payload: farmers
     }))
    }
 }
 