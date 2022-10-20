import axios from "axios";
import { GET_PROJECT_TASKS, GET_ERRORS, SAVE_PROJECT_TASK, DELETE_PROJECT_TASK, GET_PROJECT_TASK, UPDATE_PROJECT_TASK } from "./actionTypes";

export const getProjectTasks = async (projectID) => {

    try {
        const resp = await axios.get(`/api/backlog/findAllTasks?projectID=${projectID}`)
        return {
            type: GET_PROJECT_TASKS,
            payload: resp.data
        };
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

export const saveProjectTask = async (projectTask, projectID) => {
    try {
        const resp = await axios.post(`/api/backlog/addTask?projectID=${projectID}`, projectTask)
        return {
            type: SAVE_PROJECT_TASK,
            payload: resp.data
        }
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

export const deleteProjectTask = async (taskID) => {
    try{
        const resp = await axios.delete(`/api/task/deleteTask?taskID=${taskID}`)
        return {
            type: DELETE_PROJECT_TASK,
            payload: resp.data
        }
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

export const getProjectTask = async (taskID) => {
    try {
        const resp = await axios.get(`/api/task/findTask?taskID=${taskID}`)
        return {
            type: GET_PROJECT_TASK,
            payload: resp.data
        }
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

export const updateProjectTask = async (projectTask) => {
    try {
        const resp = await axios.patch("api/task/updateTask", projectTask);
        return {
            type: UPDATE_PROJECT_TASK,
            payload: resp.data
        }
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}