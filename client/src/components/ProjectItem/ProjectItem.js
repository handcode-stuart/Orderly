import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProject } from "../../actions/project";
import "./ProjectItem.scss";

const ProjectItem = ({ deleteProject, project }) => {
    const [projectData] = useState(project);

    const { _id, name, color } = projectData;

    const handleDeleteProject = e => {
        e.preventDefault();
        deleteProject(_id);
    };

    return (
        <li className='project-item'>
            <div className='project-item__wrapper'>
                <div className='project-item__form-group'>
                    <div className='project-item__project-color'>
                        <span style={{ backgroundColor: color }} />
                    </div>
                    <Link to={`/project/${_id}`}>
                        <p>{name}</p>
                    </Link>
                </div>
                <div className='project-item__actions'>
                    <span
                        className='delete'
                        onClick={e =>
                            window.confirm("Are you sure you want to delete this project?") &&
                            handleDeleteProject(e)
                        }
                    />
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
