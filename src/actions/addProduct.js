export const addProduct = (prodFormState, farmerID) => {

    return (dispatch) => {
        console.log("in addProduct", farmerID)
        fetch(`http://localhost:3000/api/v1/farmers/${farmerID}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(prodFormState)
        })
        .then(resp => resp.json())
        .then(newProd => dispatch({type: 'ADD_PRODUCT', payload: newProd})
        )
    }

}


