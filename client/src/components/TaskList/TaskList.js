import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";

const TaskList = ({ task: { tasks } }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                <ul className='task-list'>
                    {tasks.map(task => (
                        <li key={task._id}>
                            <TaskItem task={task} />
                        </li>
                    ))}
                </ul>
            ) : (
                "Sorry, no tasks yet"
            )}
        </div>
    );
};

TaskList.propTypes = {
    task: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    task: state.task,
});

export default connect(mapStateToProps)(TaskList);
