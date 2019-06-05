import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Task from "./Task";

const AllTasks = ({ task: { tasks } }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map(task => (
                        <Task key={task._id} task={task} />
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
