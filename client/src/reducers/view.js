import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR,
    CLOSE_NEW_TASK_FORM,
    OPEN_NEW_TASK_FORM,
} from "../actions/types";

const initialState = {
    sidebar_open: false,
    new_task_form_open: false,
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case OPEN_SIDEBAR:
            return {
                ...state,
                sidebar_open: true,
            };
        case CLOSE_SIDEBAR:
            return {
                ...state,
                sidebar_open: false,
            };
        case OPEN_NEW_TASK_FORM:
            return {
                ...state,
                new_task_form_open: true,
            };
        case CLOSE_NEW_TASK_FORM:
            return {
                ...state,
                new_task_form_open: false,
            };
        default:
            return state;
    }
}
