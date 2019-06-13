import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarMenu = ({ handleLinkClick }) => {
    return (
        <ul className='sidebar__menu'>
            <li>
                <Link to='/' onClick={() => handleLinkClick()}>
                    <span />
                    <p>All tasks</p>
                </Link>
            </li>
            <li>
                <Link to='/projects' onClick={() => handleLinkClick()}>
                    <span />
                    <p>Projects</p>
                </Link>
            </li>
            <li>
                <Link to='/labels' onClick={() => handleLinkClick()}>
                    <span />
                    <p>Labels</p>
                </Link>
            </li>
            <li>
                <Link to='/completed' onClick={() => handleLinkClick()}>
                    <span />
                    <p>Completed</p>
                </Link>
            </li>
            <li>
                <Link to='/settings' onClick={() => handleLinkClick()}>
                    <span />
                    <p>Settings</p>
                </Link>
            </li>
        </ul>
    );
};

SidebarMenu.propTypes = {
    handleLinkClick: PropTypes.func.isRequired,
};

export default SidebarMenu;
