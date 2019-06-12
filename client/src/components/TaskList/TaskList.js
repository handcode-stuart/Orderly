import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import NoTasks from "../TaskItem/NoTasks";
import "./TaskList.scss";

const TaskList = ({ task: { tasks } }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                <ul className='task-list'>
                    {tasks.map(task => (
                        <TaskItem key={task._id} task={task} />
                    ))}
                </ul>
            ) : (
                <ul className='task-list'>
                    <NoTasks />
                </ul>
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
