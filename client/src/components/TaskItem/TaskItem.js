import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { completeTask, deleteTask } from "../../actions/task";
import "./TaskItem.scss";

const TaskItem = ({ completeTask, deleteTask, task }) => {
    const [taskData, setTaskData] = useState(task);

    const { _id, body, completed } = taskData;

    const onChange = e => {
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
        <div className='task-item'>
            <form>
                <div className='task-item__form-group'>
                    <input
                        type='checkbox'
                        name='completed'
                        onChange={e => onChange(e)}
                        checked={completed}
                    />
                    <p>{body}</p>
                </div>
                <div>
                    <button onClick={e => handleDeleteTask(e)}>x</button>
                </div>
            </form>
        </div>
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
