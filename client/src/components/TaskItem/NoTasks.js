import React from "react";
import "./TaskItem.scss";

const NoTasks = () => {
    return (
        <li className='task-item'>
            <div className='task-item__wrapper'>
                <div className='task-item__form-group'>
                    <p>You have no tasks</p>
                </div>
            </div>
        </li>
    );
};

export default NoTasks;
