import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AuthApp from "./AuthApp";
import GuestApp from "./GuestApp";
import Spinner from "../layout/Spinner";

const RouteMapper = ({ auth: { isAuthenticated, loading } }) => {
    return (
        <Fragment>{!loading ? isAuthenticated ? <AuthApp /> : <GuestApp /> : <Spinner />}</Fragment>
    );
};

RouteMapper.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(RouteMapper);
