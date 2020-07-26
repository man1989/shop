import React from "react";
import { Link } from "react-router-dom";

export const ProductInfo = ({ image, title, price, target }) => {
    return (
        <div className="col-4 py-4">
            <div className="card border-0">
                <Link to={target}>
                    <img src={image} className="card-img-top" alt={title} />
                </Link>
                <div className="card-body text-center">
                    <h5 className="card-title h6 mb-0">
                        <Link to={target}>{title}</Link>
                    </h5>
                    <small className="card-text text-muted text-center">{`₹${price*75}`}</small>
                </div>
            </div>
        </div>
    );
}