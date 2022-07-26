export const depositClaim = (amount) => {
    //create action and dispatch
    return(dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawClaim = (amount) => {
    return(dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}