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
} from "../actions/types";

const initialState = {
    tasks: [],
    current: null,
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
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task._id === payload._id) {
                        task.completed = payload.completed;
                        return task;
                    } else {
                        return task;
                    }
                }),
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== payload),
            };
        case SET_CURRENT_TASK:
            return {
                ...state,
                current: payload,
            };
        case CLEAR_CURRENT_TASK:
            return {
                ...state,
                current: null,
            };
        case FETCH_TASKS_ERROR:
        case ADD_TASK_ERROR:
        case COMPLETE_TASK_ERROR:
        case DELETE_TASK_ERROR:
        default:
            return state;
    }
}
