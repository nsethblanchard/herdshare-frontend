
export const addFarmer = (farmFormState) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/farmers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(farmFormState)
        })
        .then(resp => resp.json())
        .then(newFarm => dispatch({type: 'ADD_FARMER', payload: newFarm}))
    }

}