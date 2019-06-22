import React from "react";
import PropTypes from "prop-types";
import "./PageHeader.scss";

const PageHeader = ({ title, color = "#f0f0f0" }) => {
    return (
        <div className='page-header'>
            <div className='o-container'>
                <h1 style={{ color }}>{title}</h1>
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageHeader;
