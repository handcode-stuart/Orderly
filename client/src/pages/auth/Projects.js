import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import NewProjectForm from "../../components/NewProjectForm/NewProjectForm";
import ProjectsList from "../../components/ProjectsList/ProjectsList";

const Projects = () => {
    return (
        <div>
            <PageHeader title='Projects' />
            <ProjectsList />
            <NewProjectForm />
        </div>
    );
};

export default Projects;
