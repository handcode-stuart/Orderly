import {
    ADD_PROJECT,
    ADD_PROJECT_ERROR,
    FETCH_PROJECTS,
    FETCH_PROJECTS_ERROR,
    CLEAR_PROJECTS,
    DELETE_PROJECT,
    DELETE_PROJECT_ERROR,
} from "../actions/types";

const initialState = {
    projects: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, payload],
            };
        case FETCH_PROJECTS:
            return {
                ...state,
                projects: payload,
            };
        case CLEAR_PROJECTS:
            return {
                ...state,
                projects: [],
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project._id !== payload),
            };
        case FETCH_PROJECTS_ERROR:
        case ADD_PROJECT_ERROR:
        case DELETE_PROJECT_ERROR:
        default:
            return state;
    }
}
