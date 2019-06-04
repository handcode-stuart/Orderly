import { FETCH_TASKS, FETCH_TASKS_ERROR } from "../actions/types";

const initialState = {
    tasks: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_TASKS:
            return {
                ...state,
                tasks: payload,
            };
        case FETCH_TASKS_ERROR:
        default:
            return state;
    }
}
