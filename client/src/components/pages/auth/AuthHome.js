import React from "react";
import NewTaskForm from "../../task/NewTaskForm";
import AllTasks from "../../task/AllTasks";

const AuthHome = () => {
    return (
        <div>
            <h1>All tasks</h1>
            <AllTasks />
            <NewTaskForm />
        </div>
    );
};

export default AuthHome;
