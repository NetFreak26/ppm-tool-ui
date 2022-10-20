import { DELETE_PROJECT_TASK, GET_PROJECT_TASK, GET_PROJECT_TASKS, SAVE_PROJECT_TASK } from "../actions/actionTypes"

const initialState = {
    projectTasks: [],
    project_task: {},
    errors: {}
}

export const backlogReducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROJECT_TASKS:
            return {
                projectTasks: action.payload,
                projectTask: {},
                errors: {}
            }
        case SAVE_PROJECT_TASK:
            return {
                projectTasks: [...state.projectTasks, action.payload],
                projectTask: action.payload,
                errors: {}
            }
        case GET_PROJECT_TASK:
            return {
                ...state,
                projectTask: action.payload,
                errors: {}
            }
        case DELETE_PROJECT_TASK:
            return {
                projectTasks: state.projectTasks.filter(project_task => project_task.taskID !== action.payload),
                projectTask: action.payload,
                errors: {}
            }
        default:
            return state
    }
}