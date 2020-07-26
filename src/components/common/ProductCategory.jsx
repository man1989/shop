import React from "react";
import { Link } from "react-router-dom";
export const ProductCategory = (props) => {
    return (
        <div className="col-md-12 mb-4 category">
            <figure className="figure">
                <Link to={props.routePath}>
                    <img src={props.banner} alt={props.altText} className="figure-img img-fluid"></img>
                </Link>
                <figcaption className="figure-caption text-center">{props.caption}</figcaption>
            </figure>
            <div className="text-center">
                <Link to={props.routePath} className="btn btn-dark btn-sm">
                    SHOP NOW
                </Link>
            </div>
        </div>
    );
}