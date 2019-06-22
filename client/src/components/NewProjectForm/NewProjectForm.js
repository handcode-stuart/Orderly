import React, { useState } from "react";
import { connect } from "react-redux";
import { addProject } from "../../actions/project";
import PropTypes from "prop-types";
import "./NewProjectForm.scss";

const NewProjectForm = ({ addProject }) => {
    const [projectData, setProjectData] = useState({
        name: "",
        color: "#959595",
    });

    const { name } = projectData;

    const handleNameChange = e => setProjectData({ ...projectData, name: e.target.value });

    const handleColorInputChange = e => setProjectData({ ...projectData, color: e.target.value });

    const onSubmit = () => {
        addProject(projectData);
        setProjectData({ name: "", color: "#959595" });
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
                <option value='#d33529'>Red</option>
                <option value='#259b2a'>Green</option>
                <option value='#ff7e2e'>Orange</option>
                <option value='#ff73d2'>Pink</option>
                <option value='#fc00fc'>Purple</option>
                <option value='#fff344'>Yellow</option>
                <option value='#959595'>Grey</option>
                <option value='#3d48f2'>Blue</option>
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
