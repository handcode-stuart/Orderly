import {
    FETCH_TASKS,
    FETCH_TASKS_ERROR,
    ADD_TASK,
    ADD_TASK_ERROR,
    CLEAR_TASKS,
} from "../actions/types";

const initialState = {
    tasks: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, payload],
            };
        case FETCH_TASKS:
            return {
                ...state,
                tasks: payload,
            };
        case CLEAR_TASKS:
            return {
                ...state,
                tasks: [],
            };
        case FETCH_TASKS_ERROR:
        case ADD_TASK_ERROR:
        default:
            return state;
    }
}
