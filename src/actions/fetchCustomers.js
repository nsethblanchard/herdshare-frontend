
export function fetchCustomers(action) {
    return (dispatch) => {
     fetch('http://localhost:3000/api/v1/customers')
     .then(resp => resp.json())
     .then(customers => dispatch({
         type: 'FETCH_CUSTOMERS',
         payload: customers
     }))
    }
 }
 