import React from "react";
import NewTaskForm from "../../task/NewTaskForm";
import AllTasks from "../../task/AllTasks";
import PageHeader from "../../layout/PageHeader";

const AuthHome = () => {
    return (
        <div>
            <PageHeader title='All tasks' />
            <AllTasks />
            <NewTaskForm />
        </div>
    );
};

export default AuthHome;
