import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthHome from "../pages/auth/AuthHome";
import AuthNav from "../layout/nav/AuthNav";
import Settings from "../pages/auth/Settings";

const AuthApp = () => {
    return (
        <Fragment>
            <AuthNav />
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
