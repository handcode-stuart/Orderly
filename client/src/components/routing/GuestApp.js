import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import GuestHome from "../pages/guest/GuestHome";
import GuestNav from "../layout/nav/GuestNav";
import Login from "../pages/guest/Login";
import Register from "../pages/guest/Register";

const GuestApp = () => {
    return (
        <Fragment>
            <GuestNav />
            <div className='o-container'>
                <Switch>
                    <Route exact path='/' component={GuestHome} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route render={() => <Redirect to='/' />} />
                </Switch>
            </div>
        </Fragment>
    );
};

export default GuestApp;
