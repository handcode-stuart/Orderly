import React from "react";

import TaskList from "../../components/TaskList/TaskList";
import PageHeader from "../../components/PageHeader/PageHeader";

const AuthHome = () => {
    return (
        <div>
            <PageHeader title='All tasks' />
            <TaskList filter={[{ completed: false }]} />
        </div>
    );
};

export default AuthHome;
