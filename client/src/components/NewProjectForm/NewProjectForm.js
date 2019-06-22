import React, { useState } from "react";
import { connect } from "react-redux";
import { addProject } from "../../actions/project";
import PropTypes from "prop-types";
import "./NewProjectForm.scss";

const NewProjectForm = ({ addProject }) => {
    const [projectData, setProjectData] = useState({
        name: "",
        color: "grey",
    });

    const { name } = projectData;

    const handleNameChange = e => setProjectData({ ...projectData, name: e.target.value });

    const handleColorInputChange = e => setProjectData({ ...projectData, color: e.target.value });

    const onSubmit = () => {
        addProject(projectData);
        setProjectData({ name: "", color: "grey" });
    };

    return (
        <div className='new-project-form'>
            <input
                type='text'
                name='name'
                value={name}
                onChange={e => handleNameChange(e)}
                placeholder='New project...'
            />
            <select name='color' onChange={e => handleColorInputChange(e)}>
                <option value='red'>Red</option>
                <option value='green'>Green</option>
                <option value='orange'>Orange</option>
                <option value='pink'>Pink</option>
                <option value='#d911d9'>Purple</option>
                <option value='grey'>Grey</option>
            </select>
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
