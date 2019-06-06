import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import task from "./task";
import view from "./view";

export default combineReducers({
    auth,
    alert,
    task,
    view,
});
