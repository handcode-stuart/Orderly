import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserTag from "../UserTag/UserTag";
import SidebarMenu from "./SidebarMenu";
import { logout } from "../../actions/auth";
import { toggleSidebar } from "../../actions/view";
import "./Sidebar.scss";

const Sidebar = ({ logout, auth, view, toggleSidebar }) => {
    const [openState, setOpenState] = useState(false);

    useEffect(() => {
        setOpenState(view.sidebar_open);
    }, [view.sidebar_open]);

    return (
        <div className={openState ? "sidebar  active" : "sidebar"}>
            <div className='sidebar__close-btn' onClick={() => toggleSidebar(view.sidebar_open)} />
            <div className='sidebar__bg' />
            <div className='sidebar__content'>
                <div>
                    <UserTag user={auth.user} />
                    <SidebarMenu handleLinkClick={() => toggleSidebar(true)} />
                </div>
                <div className='sidebar__logout'>
                    <a href='#!' onClick={logout}>
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    view: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    view: state.view,
});

export default connect(
    mapStateToProps,
    { logout, toggleSidebar },
)(Sidebar);
