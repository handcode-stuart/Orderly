import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Task from "./Task";

const AllTasks = ({ task: { tasks } }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                <ul className='c-task-list'>
                    {tasks.map(task => (
                        <li key={task._id}>
                            <Task task={task} />
                        </li>
                    ))}
                </ul>
            ) : (
                "Sorry, no tasks yet"
            )}
        </div>
    );
};

AllTasks.propTypes = {
    task: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    task: state.task,
});

export default connect(mapStateToProps)(AllTasks);
