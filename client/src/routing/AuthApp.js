import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AuthHome from "../pages/auth/AuthHome";
import Projects from "../pages/auth/Projects";
import Labels from "../pages/auth/Labels";
import Settings from "../pages/auth/Settings";
import Sidebar from "../components/Sidebar/Sidebar";
import AuthNav from "../components/nav/AuthNav";
import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import NewTaskButton from "../components/NewTaskButton/NewTaskButton";

const AuthApp = ({ view: { new_task_form_open } }) => {
    return (
        <Fragment>
            <AuthNav />
            <Sidebar />
            <Switch>
                <Route exact path='/' component={AuthHome} />
                <Route path='/projects' component={Projects} />
                <Route path='/labels' component={Labels} />
                <Route path='/settings' component={Settings} />
                <Route render={() => <Redirect to='/' />} />
            </Switch>
            {new_task_form_open && <NewTaskForm />}
            <NewTaskButton />
        </Fragment>
    );
};

AuthApp.propTypes = {
    view: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    view: state.view,
});

export default connect(mapStateToProps)(AuthApp);
