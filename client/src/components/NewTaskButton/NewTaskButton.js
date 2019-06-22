import React from "react";
import "./NewTaskButton.scss";
import { connect } from "react-redux";
import { toggleTaskForm } from "../../actions/view";
import PropTypes from "prop-types";

const NewTaskButton = ({ view: { task_form_open }, toggleTaskForm }) => {
    return (
        <div
            className={task_form_open ? "new-task-button  active" : "new-task-button"}
            onClick={e => toggleTaskForm(task_form_open)}
        />
    );
};

NewTaskButton.propTypes = {
    toggleTaskForm: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
});

export default connect(
    mapStateToProps,
    { toggleTaskForm },
)(NewTaskButton);
