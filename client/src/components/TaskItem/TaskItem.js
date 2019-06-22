import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toggleTaskForm } from "../../actions/view";
import { completeTask, setCurrentTask } from "../../actions/task";
import "./TaskItem.scss";

const TaskItem = ({
    project: { projects },
    view: { task_form_open },
    completeTask,
    task,
    toggleTaskForm,
    setCurrentTask,
}) => {
    const [taskCompleteStatus, setTaskCompleteStatus] = useState(task.completed);
    const { _id, body } = task;

    const project = projects.find(proj => proj._id === task.project);

    const onCompleteClick = e => {
        completeTask(_id, !taskCompleteStatus);
        setTaskCompleteStatus(!taskCompleteStatus);
    };

    const handleTaskClick = () => {
        // Set current task
        setCurrentTask(task);

        // Open task edit overlay
        toggleTaskForm(task_form_open);
    };

    return (
        <li className='task-item'>
            <div className='task-item__wrapper'>
                <div className='task-item__form-group'>
                    <div className='task-item__completed-box'>
                        <span className='circle' onClick={() => onCompleteClick()} />
                    </div>
                    <p onClick={() => handleTaskClick()}>{body}</p>
                    <p className='task-item__task-project'>
                        {project ? (
                            <Link to={`/project/${project._id}`}>
                                <span
                                    className='project'
                                    style={{
                                        color: project.color,
                                        borderColor: project.color,
                                    }}
                                >
                                    {project.name}
                                </span>
                            </Link>
                        ) : (
                            <Link to={`/project/inbox`}>
                                <span
                                    className='project'
                                    style={{
                                        color: "#FFF",
                                        borderColor: "#FFF",
                                    }}
                                >
                                    Inbox
                                </span>
                            </Link>
                        )}
                    </p>
                </div>
            </div>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
    completeTask: PropTypes.func.isRequired,
    toggleTaskForm: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    project: state.project,
    view: state.view,
});

export default connect(
    mapStateToProps,
    { completeTask, toggleTaskForm, setCurrentTask },
)(TaskItem);
