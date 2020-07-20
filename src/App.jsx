import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import {Header} from "./components/pages/Header.jsx";
import { HomePage } from "./components/pages/HomePage.jsx";
const App = () => {
    return (
       <>
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}>
                    </Route>
                    <Route path="/mens_outerwear">
                        {"mens outewear"}
                    </Route>
                    <Route path="/ladies_outerwear">
                        {"ladies outewear"}
                    </Route>
                    <Route path="/mens_tshirt"></Route>
                    <Route path="/ladies_tshirt"></Route>
                </Switch>
            </div>
            <Helmet>
                <title>Home - Shop</title>
            </Helmet>
        </>
    );
}

export default App;