import React, { Fragment, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fetchTasks } from "../../actions/task";
import AuthHome from "../pages/auth/AuthHome";
import AuthNav from "../layout/AuthNav";
import Settings from "../pages/auth/Settings";

const AuthApp = ({ fetchTasks }) => {
    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <Fragment>
            <AuthNav />
            <Switch>
                <Route exact path='/' component={AuthHome} />
                <Route path='/settings' component={Settings} />
                <Route render={() => <Redirect to='/' />} />
            </Switch>
        </Fragment>
    );
};

export default connect(
    null,
    { fetchTasks },
)(AuthApp);
