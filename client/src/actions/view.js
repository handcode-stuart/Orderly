import { OPEN_SIDEBAR, CLOSE_SIDEBAR, CLOSE_NEW_TASK_FORM, OPEN_NEW_TASK_FORM } from "./types";

export const toggleSidebar = isOpen => dispatch => {
    dispatch({ type: isOpen ? CLOSE_SIDEBAR : OPEN_SIDEBAR });
};

export const toggleNewTaskForm = isOpen => dispatch => {
    dispatch({ type: isOpen ? CLOSE_NEW_TASK_FORM : OPEN_NEW_TASK_FORM });
};
