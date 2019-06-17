import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProjectItem from "../ProjectItem/ProjectItem";
import NoProjects from "../ProjectItem/NoProjects";
import "./ProjectsList.scss";

const ProjectList = ({ projects: { projects } }) => {
    return (
        <div>
            {projects.length > 0 ? (
                <ul className='projects-list'>
                    {projects.map(project => (
                        <Link to={`/project/${project._id}`} key={project._id}>
                            <ProjectItem project={project} />
                        </Link>
                    ))}
                </ul>
            ) : (
                <ul className='projects-list'>
                    <NoProjects />
                </ul>
            )}
        </div>
    );
};

ProjectList.propTypes = {
    projects: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    projects: state.project,
});

export default connect(mapStateToProps)(ProjectList);
