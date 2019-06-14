import {
    ADD_PROJECT,
    ADD_PROJECT_ERROR,
    FETCH_PROJECTS,
    FETCH_PROJECTS_ERROR,
    CLEAR_PROJECTS,
    DELETE_PROJECT,
    DELETE_PROJECT_ERROR,
} from "./types";
import axios from "axios";

export const fetchProjects = () => async dispatch => {
    try {
        const res = await axios.get("/api/v1/projects");

        dispatch({
            type: FETCH_PROJECTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: FETCH_PROJECTS_ERROR,
        });
    }
};

export const addProject = project => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios.post("/api/v1/projects", project, config);

        dispatch({
            type: ADD_PROJECT,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: ADD_PROJECT_ERROR,
        });
    }
};

export const clearProjects = () => ({
    type: CLEAR_PROJECTS,
});

export const deleteProject = id => async dispatch => {
    try {
        await axios.delete(`/api/v1/projects/${id}`);

        dispatch({
            type: DELETE_PROJECT,
            payload: id,
        });
    } catch (err) {
        dispatch({
            type: DELETE_PROJECT_ERROR,
        });
    }
};
