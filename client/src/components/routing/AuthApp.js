import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthHome from "../pages/auth/AuthHome";
import Settings from "../pages/auth/Settings";
import Sidebar from "../layout/Sidebar/Sidebar";
import AuthNav from "../layout/nav/AuthNav";

const AuthApp = () => {
    return (
        <Fragment>
            <AuthNav />
            <Sidebar />
            <div className='o-container'>
                <Switch>
                    <Route exact path='/' component={AuthHome} />
                    <Route path='/settings' component={Settings} />
                    <Route render={() => <Redirect to='/' />} />
                </Switch>
            </div>
        </Fragment>
    );
};

export default AuthApp;
