import React from "react";
import PropTypes from "prop-types";
import "./UserTag.scss";

const UserTag = ({ user }) => {
    return (
        <div className='c-user-tag'>
            <span />
            <p>Hi, {user.name}!</p>
        </div>
    );
};

UserTag.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserTag;
