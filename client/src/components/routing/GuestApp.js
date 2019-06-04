import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import GuestHome from "../pages/guest/GuestHome";
import GuestNav from "../layout/GuestNav";
import Login from "../pages/guest/Login";
import Register from "../pages/guest/Register";

const GuestApp = () => {
    return (
        <Fragment>
            <GuestNav />
            <Switch>
                <Route exact path='/' component={GuestHome} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route render={() => <Redirect to='/' />} />
            </Switch>
        </Fragment>
    );
};

export default GuestApp;
