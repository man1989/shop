import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { ProductInfo } from "../common/ProductInfo.jsx";
import { ShopImage } from "../common/ShopImage.jsx";
import {loadProducts} from "../../redux/actions/products.js";
import {connect} from "react-redux";

const Page = ({products, loadProducts, ...props}) => {
    const {pathname} = useLocation();
    useEffect(() => {
        loadProducts(pathname);
    }, [pathname]);
    return (
        <>
            <Helmet>
                <title>{props.title} - SHOP</title>
            </Helmet>
            <ShopImage image={`/images${pathname}.jpg`}
                alt={props.title} caption={props.title}>
                <small className="text-muted">{`(${products.length} items)`}</small>
            </ShopImage>
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <ProductInfo key={product.name}
                                target={`/details${location.pathname}/${product.name}`}
                                title={product.title}
                                price={product.price}
                                image={product.image.replace("data", "")} />
                        );
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({products}) => {
    return {
        products
    };
}
const mapDisptachToProps = {
    loadProducts
};

export const ListingPage = connect(mapStateToProps, mapDisptachToProps)(Page);