import React, { useEffect, useState, createRef } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/task";
import PropTypes from "prop-types";
import { toggleNewTaskForm } from "../../actions/view";
import "./NewTaskForm.scss";

const NewTaskForm = ({ view: { new_task_form_open }, addTask, toggleNewTaskForm }) => {
    const ref = createRef();
    const [taskData, setTaskData] = useState({
        body: "",
    });

    useEffect(() => ref.current.focus(), [ref]);

    const { body } = taskData;

    const onChange = e => setTaskData({ body: e.target.value });

    const onSubmit = () => {
        addTask(taskData);
        setTaskData({ body: "" });
        toggleNewTaskForm(new_task_form_open);
    };

    return (
        <div className={new_task_form_open ? "new-task-form  active" : "new-task-form"}>
            <textarea ref={ref} name='body' value={body} onChange={e => onChange(e)} />
            <button onClick={e => onSubmit()} />
        </div>
    );
};

NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    toggleNewTaskForm: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
});

export default connect(
    mapStateToProps,
    { addTask, toggleNewTaskForm },
)(NewTaskForm);
