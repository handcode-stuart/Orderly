import { OPEN_SIDEBAR, CLOSE_SIDEBAR, CLOSE_TASK_FORM, OPEN_TASK_FORM } from "./types";

export const toggleSidebar = isOpen => dispatch => {
    dispatch({ type: isOpen ? CLOSE_SIDEBAR : OPEN_SIDEBAR });
};

export const toggleTaskForm = isOpen => dispatch => {
    dispatch({ type: isOpen ? CLOSE_TASK_FORM : OPEN_TASK_FORM });
};
