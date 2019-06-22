import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import NoTasks from "../TaskItem/NoTasks";
import "./TaskList.scss";

const TaskList = ({ task: { tasks }, filter = [] }) => {
    /**
     * Current use case for multiple filters is OR, not AND
     * e.g. <TaskList filter={[{ project: match.params.id }, { completed: false }]} />
     */
    const filteredTasks = () => {
        let filteredTasks = tasks;
        filter.forEach(filter => {
            const key = Object.keys(filter)[0];
            const value = filter[key];
            filteredTasks = filteredTasks.filter(task => task[key] === value);
        });
        return filteredTasks;
    };

    return (
        <div>
            <ul className='task-list'>
                {filteredTasks().length > 0 ? (
                    filteredTasks().map(task => <TaskItem key={task._id} task={task} />)
                ) : (
                    <NoTasks />
                )}
            </ul>
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
