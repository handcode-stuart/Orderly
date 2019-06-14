import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProject } from "../../actions/project";
import "./ProjectItem.scss";

const ProjectItem = ({ deleteProject, project }) => {
    const [projectData, setProjectData] = useState(project);

    const { _id, name, colour } = projectData;

    const handleDeleteProject = e => {
        e.preventDefault();
        deleteProject(_id);
    };

    return (
        <li className='project-item'>
            <div className='project-item__wrapper'>
                <div className='project-item__form-group'>
                    <div className='project-item__project-colour'>
                        <span style={{ backgroundColor: colour }} />
                    </div>
                    <p>{name}</p>
                </div>
                <div className='project-item__actions'>
                    <span className='delete' onClick={e => handleDeleteProject(e)} />
                </div>
            </div>
        </li>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired,
    deleteProject: PropTypes.func.isRequired,
};

export default connect(
    null,
    { deleteProject },
)(ProjectItem);
