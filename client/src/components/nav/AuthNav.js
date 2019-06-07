import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleSidebar } from "../../actions/view";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import UserProfileBubble from "../UserProfileBubble/UserProfileBubble";
import "./AuthNav.scss";

const AuthNav = ({ view, toggleSidebar }) => {
    return (
        <div className='auth-nav'>
            <div className='o-container  auth-nav__container'>
                <BurgerMenuIcon handleClick={() => toggleSidebar(view.sidebar_open)} />
                <UserProfileBubble />
            </div>
        </div>
    );
};

AuthNav.propTypes = {
    view: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
});

export default connect(
    mapStateToProps,
    { toggleSidebar },
)(AuthNav);
