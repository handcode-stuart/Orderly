import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { completeTask, deleteTask } from "../../actions/task";
import "./TaskItem.scss";

const TaskItem = ({ project: { projects }, completeTask, deleteTask, task }) => {
    const [taskData, setTaskData] = useState(task);
    const { _id, body, completed } = taskData;

    const project = projects.find(proj => proj._id === taskData.project);

    const [isEditing, setIsEditing] = useState(false);

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

    const handleClick = () => setIsEditing(!isEditing);

    return (
        <li className='task-item' onClick={() => handleClick()}>
            <div className='task-item__wrapper'>
                <div className='task-item__form-group'>
                    <div className='task-item__completed-box'>
                        <span className='circle' onClick={e => onCompleteClick()} />
                    </div>
                    <p>{body}</p>
                    <p className='task-item__task-project'>
                        {project && (
                            <Link to={`/project/${project._id}`}>
                                <span
                                    className='project'
                                    style={{
                                        color: project.colour,
                                        borderColor: project.colour,
                                    }}
                                >
                                    {project.name}
                                </span>
                            </Link>
                        )}
                    </p>
                </div>
            </div>
            {isEditing && (
                <div className='task-item__edit'>
                    <span
                        className='circle  delete'
                        onClick={e =>
                            window.confirm("Are you sure you want to delete this item?") &&
                            handleDeleteTask(e)
                        }
                    />
                </div>
            )}
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
