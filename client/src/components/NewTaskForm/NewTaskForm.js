import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/task";
import PropTypes from "prop-types";
import "./NewTaskForm.scss";

const NewTaskForm = ({ addTask }) => {
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
        <form className='new-task-form' onSubmit={e => onSubmit(e)}>
            <input type='text' name='body' value={body} onChange={e => onChange(e)} />
            <input type='submit' value='Add task' />
        </form>
    );
};

NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default connect(
    null,
    { addTask },
)(NewTaskForm);
