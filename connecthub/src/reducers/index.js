import { combineReducers } from "redux";
import useReducer from "./useReducer";

const rootReducer = combineReducers({
    userState: useReducer,
})