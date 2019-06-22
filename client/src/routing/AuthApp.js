import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AuthHome from "../pages/auth/AuthHome";
import Projects from "../pages/auth/Projects";
import Project from "../pages/auth/Project";
import Labels from "../pages/auth/Labels";
import Settings from "../pages/auth/Settings";
import Completed from "../pages/auth/Completed";
import Sidebar from "../components/Sidebar/Sidebar";
import AuthNav from "../components/nav/AuthNav";
import TaskForm from "../components/TaskForm/TaskForm";
import NewTaskButton from "../components/NewTaskButton/NewTaskButton";

const AuthApp = ({ view: { task_form_open } }) => {
    return (
        <Fragment>
            <AuthNav />
            <Sidebar />
            <Switch>
                <Route exact path='/' component={AuthHome} />
                <Route path='/projects' component={Projects} />
                <Route path='/project/:id' component={Project} />
                <Route path='/labels' component={Labels} />
                <Route path='/completed' component={Completed} />
                <Route path='/settings' component={Settings} />
                <Route render={() => <Redirect to='/' />} />
            </Switch>
            {task_form_open && <TaskForm />}
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
