export const addProduct = (prodFormState) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(prodFormState)
        })
        .then(resp => resp.json())
        .then(newProd => dispatch({type: 'ADD_CUSTOMER', payload: newProd}))
    }

}