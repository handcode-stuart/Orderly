import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { completeTask, deleteTask } from "../../actions/task";
import "./TaskItem.scss";

const TaskItem = ({ project: { projects }, completeTask, deleteTask, task }) => {
    const [taskData, setTaskData] = useState(task);

    const { _id, body, completed, project } = taskData;

    const onCompleteClick = e => {
        completeTask(_id, !completed);
        setTaskData({
            ...taskData,
            completed: !completed,
        });
    };

    const handleDeleteTask = e => {
        e.preventDefault();
        deleteTask(_id);
    };

    return (
        <li className='task-item'>
            <div className='task-item__wrapper'>
                <div className='task-item__form-group'>
                    <div className='task-item__completed-box'>
                        <span className='circle' onClick={e => onCompleteClick()} />
                    </div>
                    <p>
                        {body}
                        <br />
                        {project &&
                            projects
                                .filter(proj => proj._id === project)
                                .map(proj => (
                                    <span
                                        className='project'
                                        style={{ backgroundColor: proj.colour }}
                                    >
                                        {proj.name}
                                    </span>
                                ))}
                    </p>
                </div>
                <div className='task-item__actions'>
                    <span className='circle  delete' onClick={e => handleDeleteTask(e)} />
                </div>
            </div>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    project: state.project,
});

export default connect(
    mapStateToProps,
    { completeTask, deleteTask },
)(TaskItem);
