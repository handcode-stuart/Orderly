import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import NoTasks from "../TaskItem/NoTasks";
import "./TaskList.scss";

const TaskList = ({ task: { tasks }, filter }) => {
    // Current use case for multiple filters is OR, not AND
    const filteredTasks = () => {
        let filteredTasks = [];
        filter.forEach(filter => {
            const key = Object.keys(filter)[0];
            const value = filter[key];
            tasks.map(task => task[key] === value && filteredTasks.push(task));
        });
        return [...new Set(filteredTasks)];
    };

    return (
        <div>
            {tasks.length > 0 ? (
                <ul className='task-list'>
                    {filter
                        ? filteredTasks().map(task => <TaskItem key={task._id} task={task} />)
                        : tasks.map(task => <TaskItem key={task._id} task={task} />)}
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
    filter: PropTypes.array,
};

const mapStateToProps = state => ({
    task: state.task,
});

export default connect(mapStateToProps)(TaskList);
