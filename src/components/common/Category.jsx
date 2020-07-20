import React from "react";
import {Link} from "react-router-dom";
export const Category = (props) => {
    return (
    <div className="col-md-12">
        <figure className="figure">
            <Link to={props.routePath}>
            <img src={props.banner} alt={props.altText} className="figure-img img-fluid"></img>
            </Link>
            <figcaption>{props.caption}</figcaption>
        </figure>
        <Link to={props.routePath}>
            <button className="btn btn-outline-secondary">SHOP NOW</button>
        </Link>
    </div>
    );
}