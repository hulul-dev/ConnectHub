import { combineReducers } from "redux";
import useReducer from "./useReducer.js";

const rootReducer = combineReducers({
    userState: useReducer,
})

export default rootReducer