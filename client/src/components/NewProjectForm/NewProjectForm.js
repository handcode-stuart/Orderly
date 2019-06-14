import React, { useState } from "react";
import { connect } from "react-redux";
import { addProject } from "../../actions/project";
import PropTypes from "prop-types";
import "./NewProjectForm.scss";

const NewProjectForm = ({ addProject }) => {
    const [projectData, setProjectData] = useState({
        name: "",
    });

    const { name } = projectData;

    const onChange = e => setProjectData({ name: e.target.value });

    const onSubmit = () => {
        addProject(projectData);
        setProjectData({ name: "" });
    };

    return (
        <div className='new-project-form'>
            <input
                type='text'
                name='name'
                value={name}
                onChange={e => onChange(e)}
                placeholder='New project...'
            />
            <button onClick={e => onSubmit()} />
        </div>
    );
};

NewProjectForm.propTypes = {
    addProject: PropTypes.func.isRequired,
};

export default connect(
    null,
    { addProject },
)(NewProjectForm);
