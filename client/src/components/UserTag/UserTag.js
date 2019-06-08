import React from "react";
import PropTypes from "prop-types";
import UserProfileBubble from "../UserProfileBubble/UserProfileBubble";
import "./UserTag.scss";

const UserTag = ({ user }) => {
    return (
        <div className='user-tag'>
            <UserProfileBubble />
            <p>Hi, {user && user.name}!</p>
        </div>
    );
};

UserTag.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserTag;
