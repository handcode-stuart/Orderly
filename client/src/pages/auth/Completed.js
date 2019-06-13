import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import TaskList from "../../components/TaskList/TaskList";

const Completed = () => {
    return (
        <div>
            <PageHeader title='Completed' />
            <TaskList filter={[{ completed: true }]} />
        </div>
    );
};

export default Completed;
