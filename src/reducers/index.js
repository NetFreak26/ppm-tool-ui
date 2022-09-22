import { projectReducers } from "./projectReducers";
import { combineReducers } from "redux";


export default combineReducers({
    project: projectReducers
})