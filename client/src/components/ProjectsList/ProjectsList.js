import React from "react";
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
                        <ProjectItem key={project._id} project={project} />
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
