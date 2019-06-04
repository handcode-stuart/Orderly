import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

const AuthNav = ({ logout }) => {
    return (
        <div className='c-nav'>
            <div className='o-container  c-nav__container'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/settings'>Settings</Link>
                    </li>
                    <li>
                        <a href='#!' onClick={logout}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

AuthNav.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default connect(
    null,
    { logout },
)(AuthNav);
