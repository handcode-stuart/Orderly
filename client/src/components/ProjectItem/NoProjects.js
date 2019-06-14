import React from "react";
import "./ProjectItem.scss";

const NoProjects = () => {
    return (
        <li className='project-item'>
            <div className='project-item__wrapper'>
                <div className='project-item__form-group'>
                    <p>You have no projects</p>
                </div>
            </div>
        </li>
    );
};

export default NoProjects;
