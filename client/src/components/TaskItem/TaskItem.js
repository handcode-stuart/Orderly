import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { completeTask, deleteTask } from "../../actions/task";
import "./TaskItem.scss";

const TaskItem = ({ completeTask, deleteTask, task }) => {
    const [taskData, setTaskData] = useState(task);

    const { _id, body, completed } = taskData;

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
        <li className={completed ? "task-item  checked" : "task-item"}>
            <div className='task-item__wrapper'>
                <div className='task-item__form-group'>
                    <div className='task-item__completed-box'>
                        <span
                            onClick={e => onCompleteClick()}
                            className={completed ? "checked" : ""}
                        />
                    </div>
                    <p>{body}</p>
                </div>
                <div className='task-item__actions'>
                    <span className='project' onClick={e => handleDeleteTask(e)} />
                    <span className='labels' onClick={e => handleDeleteTask(e)} />
                    <span className='edit' onClick={e => handleDeleteTask(e)} />
                    <span className='delete' onClick={e => handleDeleteTask(e)} />
                </div>
            </div>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default connect(
    null,
    { completeTask, deleteTask },
)(TaskItem);
