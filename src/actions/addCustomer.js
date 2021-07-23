
export const addCustomer = (custFormState) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(custFormState)
        })
    }

}