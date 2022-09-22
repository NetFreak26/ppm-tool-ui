import axios from "axios";
import { DELETE_PROJECT, GET_ERRORS, GET_PROJECTS, SAVE_PROJECT, GET_PROJECT } from "./actionTypes";

export const saveProject = async (project) => {
    try {
        const resp = await axios.post("/api/project/save", project);
        return {
            type: SAVE_PROJECT,
            payload: resp.data
        };
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

export const getProjects = async () => {
    try {
        const resp = await axios.get("/api/project/findAll");
        return {
            type: GET_PROJECTS,
            payload: resp.data
        }
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

export const deleteProject = async (projectID) => {
    try {
        await axios.delete(`/api/project/delete?projectID=${projectID}`);
        return {
            type: DELETE_PROJECT,
            payload: projectID
        }
    } catch (error){
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

export const getProject = async (projectID) => {
    try {
        const resp = await axios.get(`/api/project/find?projectID=${projectID}`);
        return {
            type: GET_PROJECT,
            payload: resp.data
        }
    } catch (error) {
        return {
            type: GET_ERRORS,
            payload: error.response.data
        }
    }
}

