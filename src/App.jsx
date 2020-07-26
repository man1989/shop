import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/pages/Header.jsx";
import { HomePage } from "./components/pages/HomePage.jsx";
import { ListingPage } from "./components/pages/ListingPage.jsx";
import { DetailsPage } from "./components/pages/DetailsPage.jsx";
import { CartPage } from "./components/pages/CartPage.jsx";
import { CheckoutPage } from "./components/pages/CheckoutPage.jsx";

const CustomRoute = ({ needNav, ...props }) => {
    return (
        <>
            <Header needNav={needNav} />
            <Route {...props}>{props.children}</Route>
        </>
    );
}
const App = () => {
    return (
        <>
            <div className="container">
                <Switch>
                    <CustomRoute exact path="/" component={HomePage} needNav />
                    <CustomRoute path="/mens_outerwear" needNav>
                        <ListingPage title={`Men's Outerwear`} />
                    </CustomRoute>
                    <CustomRoute path="/ladies_outerwear" needNav>
                        <ListingPage title={`Ladies's Outerwear`} needNav />
                    </CustomRoute>
                    <CustomRoute path="/mens_tshirts" needNav>
                        <ListingPage title={`Men's T-shirt`} />
                    </CustomRoute>
                    <CustomRoute path="/ladies_tshirts" needNav>
                        <ListingPage title={`Ladies T-shirt`} />
                    </CustomRoute>
                    <CustomRoute path="/details/:type/:name" component={DetailsPage} needNav />
                    <CustomRoute path="/cart" component={CartPage} />
                    <CustomRoute path="/checkout" component={CheckoutPage} />
                </Switch>
            </div>
        </>
    );
}

export default App;