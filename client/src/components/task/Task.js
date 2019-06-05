import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { completeTask } from "../../actions/task";

const Task = ({ completeTask, task }) => {
    const [taskData, setTaskData] = useState(task);

    const { _id, body, completed } = taskData;

    const onChange = e => {
        completeTask(_id, !completed);
        setTaskData({
            ...taskData,
            completed: !completed,
        });
    };

    return (
        <div className='c-task'>
            <form>
                <input
                    type='checkbox'
                    name='completed'
                    onChange={e => onChange(e)}
                    checked={completed}
                />
                {body}
            </form>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    completeTask: PropTypes.func.isRequired,
};

export default connect(
    null,
    { completeTask },
)(Task);
