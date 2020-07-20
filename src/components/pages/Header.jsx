import React from "react";
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <>
        <nav className="navbar navbal-light bg-light">
        <Link to={"/"} className="navbar-brand">Shop</Link>
        </nav>
        <nav>
        <Link to="/mens_outerwear">{`Men's Outerwear`}</Link>
        {" | "}
        <Link to="/ladies_outerwear">{`Ladies Outwear`}</Link>
        {" | "}
        <Link to="/mens_tshirts">{`Men's T-shirt`}</Link>
        {" | "}
        <Link to="/ladies_tshirt">{`Ladies T-Shirt`}</Link>
        </nav>
        </>
    )
}