import React from "react";
import App from "./App.jsx"
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/bootstrap-icons.svg"
import { store } from "./redux/createStore.js";
import { Provider } from "react-redux";
render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>, document.getElementById("app"));
