//func that returns state
const reducer = (state = 0, action) => {
    //read action
    //return state
    switch(action.type){
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state
    }
}

export default reducer;