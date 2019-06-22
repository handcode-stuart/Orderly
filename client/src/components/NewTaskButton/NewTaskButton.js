import React from "react";
import "./NewTaskButton.scss";
import { connect } from "react-redux";
import { clearCurrentTask } from "../../actions/task";
import { toggleTaskForm } from "../../actions/view";
import PropTypes from "prop-types";
import { ReactComponent as NewTaskButtonImg } from "./new-task-button.svg";

const NewTaskButton = ({ view: { task_form_open }, toggleTaskForm, clearCurrentTask }) => {
    const handleClick = () => {
        toggleTaskForm(task_form_open);
        clearCurrentTask();
    };

    return (
        <NewTaskButtonImg
            className={task_form_open ? "new-task-button  active" : "new-task-button"}
            onClick={() => handleClick()}
        />
    );
};

NewTaskButton.propTypes = {
    toggleTaskForm: PropTypes.func.isRequired,
    clearCurrentTask: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
});

export default connect(
    mapStateToProps,
    { toggleTaskForm, clearCurrentTask },
)(NewTaskButton);
