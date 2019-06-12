import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/task";
import PropTypes from "prop-types";
import "./NewTaskForm.scss";

const NewTaskForm = ({ view, addTask }) => {
    const [taskData, setTaskData] = useState({
        body: "",
    });

    const { body } = taskData;

    const onChange = e => setTaskData({ body: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addTask(taskData);
        setTaskData({ body: "" });
    };

    return (
        <div className={view.new_task_form_open ? "new-task-form  active" : "new-task-form"}>
            <form onSubmit={e => onSubmit(e)}>
                <textarea name='body' value={body} onChange={e => onChange(e)} />
                <input type='submit' value='Add task' />
            </form>
        </div>
    );
};

NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
});

export default connect(
    mapStateToProps,
    { addTask },
)(NewTaskForm);
