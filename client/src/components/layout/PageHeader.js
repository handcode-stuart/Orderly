import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
    return (
        <div className='c-page-header'>
            <div className='o-container'>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageHeader;
