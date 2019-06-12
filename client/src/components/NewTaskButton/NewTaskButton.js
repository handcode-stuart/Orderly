import React from "react";
import "./NewTaskButton.scss";
import { connect } from "react-redux";
import { toggleNewTaskForm } from "../../actions/view";
import PropTypes from "prop-types";

const NewTaskButton = ({ view, toggleNewTaskForm }) => {
    return (
        <div
            className={view.new_task_form_open ? "new-task-button  active" : "new-task-button"}
            onClick={e => toggleNewTaskForm(view.new_task_form_open)}
        />
    );
};

NewTaskButton.propTypes = {
    toggleNewTaskForm: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
});

export default connect(
    mapStateToProps,
    { toggleNewTaskForm },
)(NewTaskButton);
