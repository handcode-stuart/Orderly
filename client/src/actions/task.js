import {
    FETCH_TASKS,
    FETCH_TASKS_ERROR,
    ADD_TASK,
    ADD_TASK_ERROR,
    CLEAR_TASKS,
    COMPLETE_TASK,
    COMPLETE_TASK_ERROR,
    DELETE_TASK,
    DELETE_TASK_ERROR,
    SET_CURRENT_TASK,
    CLEAR_CURRENT_TASK,
} from "./types";
import axios from "axios";

export const fetchTasks = () => async dispatch => {
    try {
        const res = await axios.get("/api/v1/tasks");

        dispatch({
            type: FETCH_TASKS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: FETCH_TASKS_ERROR,
        });
    }
};

export const addTask = task => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios.post("/api/v1/tasks", task, config);

        dispatch({
            type: ADD_TASK,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: ADD_TASK_ERROR,
        });
    }
};

export const clearTasks = () => ({
    type: CLEAR_TASKS,
});

export const completeTask = (id, completed) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ completed });

    try {
        const res = await axios.post(`/api/v1/tasks/${id}/complete`, body, config);

        dispatch({
            type: COMPLETE_TASK,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: COMPLETE_TASK_ERROR,
        });
    }
};

export const deleteTask = id => async dispatch => {
    try {
        await axios.delete(`/api/v1/tasks/${id}`);

        dispatch({
            type: DELETE_TASK,
            payload: id,
        });
    } catch (err) {
        dispatch({
            type: DELETE_TASK_ERROR,
        });
    }
};

export const setCurrentTask = task => ({
    type: SET_CURRENT_TASK,
    payload: task,
});

export const clearCurrentTask = () => ({
    type: CLEAR_CURRENT_TASK,
});
