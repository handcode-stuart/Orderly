import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./types";

export const toggleSidebar = isOpen => dispatch => {
    dispatch({ type: isOpen ? CLOSE_SIDEBAR : OPEN_SIDEBAR });
};
