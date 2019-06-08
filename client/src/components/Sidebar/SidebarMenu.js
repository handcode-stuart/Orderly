import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
    return (
        <ul className='sidebar__menu'>
            <li>
                <span />
                <Link to='/'>All tasks</Link>
            </li>
            <li>
                <span />
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <span />
                <Link to='/labels'>Labels</Link>
            </li>
            <li>
                <span />
                <Link to='/settings'>Settings</Link>
            </li>
        </ul>
    );
};

export default SidebarMenu;
