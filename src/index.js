import React from "react";
import App from "./App.jsx"
import { render } from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

render(
<Router>
    <App />
</Router>, document.getElementById("app"));
