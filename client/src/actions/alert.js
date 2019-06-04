import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType, timeout = 20000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { alertType, msg, id },
    });
    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
};
