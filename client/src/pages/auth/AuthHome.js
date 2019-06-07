import React from "react";
import NewTaskForm from "../../components/NewTaskForm/NewTaskForm";
import TaskList from "../../components/TaskList/TaskList";
import PageHeader from "../../components/PageHeader/PageHeader";

const AuthHome = () => {
    return (
        <div>
            <PageHeader title='All tasks' />
            <TaskList />
            <NewTaskForm />
        </div>
    );
};

export default AuthHome;
