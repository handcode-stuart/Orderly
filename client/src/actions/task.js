import { FETCH_TASKS, FETCH_TASKS_ERROR, ADD_TASK, ADD_TASK_ERROR, CLEAR_TASKS } from "./types";
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
