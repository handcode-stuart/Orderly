import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/types";

const initialState = {
    sidebar_open: false,
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
        default:
            return state;
    }
}
