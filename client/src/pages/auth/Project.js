import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader/PageHeader";
import TaskList from "../../components/TaskList/TaskList";

const Project = ({ match, project: { projects } }) => {
    const currProject = projects.find(project => project._id === match.params.id);
    return (
        <div>
            <PageHeader title={currProject.name} />
            <TaskList filter={[{ project: match.params.id }]} />
        </div>
    );
};

const mapStateToProps = state => ({
    project: state.project,
});

export default connect(mapStateToProps)(Project);
