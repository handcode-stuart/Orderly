import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleSidebar } from "../../../actions/view";

const AuthNav = ({ view, toggleSidebar }) => {
    return (
        <div>
            <span onClick={() => toggleSidebar(view.sidebar_open)}>Open</span>
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
