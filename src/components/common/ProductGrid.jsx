import React from "react";
import { Link } from "react-router-dom";
import { SelectElement } from "../common/SelectElement.jsx";

export const ProductGrid = ({ product, ...props }) => {
    const selectQty = [
        { value: "1", text: "1" },
        { value: "2", text: "2" },
        { value: "3", text: "3" },
        { value: "4", text: "4" },
        { value: "5", text: "5" },
        { value: "6", text: "6" },
        { value: "7", text: "7" },
        { value: "8", text: "8" },
        { value: "9", text: "9" },
        { value: "10", text: "10" },
        { value: "11", text: "11" },
        { value: "12", text: "12" }
    ];
    return (
        <div className="row pb-4">
            <div className="name col-sm-4">
                <div className="row">
                    <img src={product.image} alt={product.alt} className="image-thumbnail col-4 mr-0 pr-0" />
                    <label className="col-8 my-auto pl-0 ml-0">
                        <Link to={product.target}>{product.title}</Link>
                    </label>
                </div>
            </div>
            <div className="details col-sm-8 my-auto">
                <div className="row align-items-baseline">
                    <div className="col-sm-3">
                        <SelectElement label="Qty: " options={selectQty} onChange={props.onChange} defaultValue={product.qty} />
                    </div>
                    <div className="col-sm-3">
                        <span className="text-muted">Size:</span>
                        <span className="pl-2 text-muted">{product.size}</span>
                    </div>
                    <div className="col-sm-3">
                        <span className="text-muted">₹{product.price * 75}</span>
                    </div>
                    <div className="col-sm-3" style={{fontSize:"1.5em", cursor: "pointer"}} onClick={props.onDelete}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
