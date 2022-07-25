//combine reducers makes sense with complexity not per say this simple demo
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    //takes in obj of all reducers combined
    account: accountReducer
});

export default reducers;