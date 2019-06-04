import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { loadUser } from "./actions/auth";
import RouteMapper from "./components/routing/RouteMapper";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

// If a token is found in localStorage then set axios headers
if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <RouteMapper />
            </Router>
        </Provider>
    );
};

export default App;
