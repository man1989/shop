import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCartList } from "../../redux/actions/cart.js";
import { connect } from "react-redux";
const Page = ({ fetchCartList, cartList: products, ...props }) => {
    useEffect(() => {
        fetchCartList();
    }, []);
    return (
        <>
            <style>
                {`
            .sub-navbar{
                padding: 2% 0 2% 0;
            }
            .sub-navbar > a {
                margin-left: 1em; 
                margin-right: 1em; 
            }
            `
                }
            </style>
            <nav className="navbar navbar-light bg-light">
                <Link to={"/"} className="navbar-brand mx-auto d-block text-center order-0">Shop</Link>
                <Link to={"/cart"}>
                    <div>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-bag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                        </svg>
                        <span className="badge badge-primary rounded-circle">{products.reduce((r, p)=>(r+p.qty), 0) || 0}</span>
                    </div>
                </Link>
            </nav>
            {
            props.needNav && 
            <nav className="nav justify-content-center my-3 sub-navbar">
                <Link to="/mens_outerwear">{`Men's Outerwear`}</Link>
                {" | "}
                <Link to="/ladies_outerwear">{`Ladies Outwear`}</Link>
                {" | "}
                <Link to="/mens_tshirts">{`Men's T-shirt`}</Link>
                {" | "}
                <Link to="/ladies_tshirts">{`Ladies T-Shirt`}</Link>
            </nav>
            }
        </>
    )
}

const mapStateToProps = ({ cartList }) => {
    return {
        cartList
    };
};

const mapDispatchToProps = {
    fetchCartList
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(Page);