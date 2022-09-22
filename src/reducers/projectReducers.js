import { SAVE_PROJECT, GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT } from "../actions/actionTypes"

const initialState = {
    projects: [],
    project: {},
    errors: {}
}

export const projectReducers = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_PROJECT:
            return {
                projects: [...state.projects, action.payload],
                project: action.payload,
                errors: {}
            }
        case GET_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        case GET_PROJECTS:
            return {
                projects: action.payload,
                project: {},
                errors: {}
            }
        case DELETE_PROJECT:
            return {
                projects: state.projects.filter((project) => project.projectID !== action.payload),
                project: {},
                errors: {}
            }
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload,
                errors: {}
            }
        default:
            return state;
    }
}