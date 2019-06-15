import React, { useEffect, useState, createRef } from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/task";
import PropTypes from "prop-types";
import { toggleNewTaskForm } from "../../actions/view";
import "./NewTaskForm.scss";

const NewTaskForm = ({
    project: { projects },
    view: { new_task_form_open },
    addTask,
    toggleNewTaskForm,
}) => {
    const [taskData, setTaskData] = useState({
        body: "",
        project_id: "",
    });

    const ref = createRef();

    useEffect(() => ref.current.focus(), [ref]);

    const { body } = taskData;

    const onBodyChange = e => setTaskData({ ...taskData, body: e.target.value });

    const onProjectChange = e => setTaskData({ ...taskData, project_id: e.target.value });

    const onSubmit = () => {
        addTask(taskData);
        setTaskData({ body: "", project_id: null });
        toggleNewTaskForm(new_task_form_open);
    };

    return (
        <div className={new_task_form_open ? "new-task-form  active" : "new-task-form"}>
            <div className='new-task-form__bg' />
            <textarea
                ref={ref}
                name='body'
                value={body}
                onChange={e => onBodyChange(e)}
                placeholder='Your task...'
            />
            <select name='project_id' onChange={e => onProjectChange(e)}>
                <option value=''>None</option>
                {projects &&
                    projects.map(project => (
                        <option key={project._id} value={project._id}>
                            {project.name}
                        </option>
                    ))}
            </select>
            <div className='new-task-form__actions'>
                <span className='labels'>@</span>
                <span className='priority'>!!!</span>
            </div>
            <button onClick={e => onSubmit()} />
        </div>
    );
};

NewTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    toggleNewTaskForm: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
    project: state.project,
});

export default connect(
    mapStateToProps,
    { addTask, toggleNewTaskForm },
)(NewTaskForm);
