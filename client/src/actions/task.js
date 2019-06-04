import { FETCH_TASKS, FETCH_TASKS_ERROR } from "./types";
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
