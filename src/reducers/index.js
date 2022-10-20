import { projectReducers } from "./projectReducers";
import { combineReducers } from "redux";
import { backlogReducers } from "./projectTaskReducers";


export default combineReducers({
    project: projectReducers,
    backlog: backlogReducers
})