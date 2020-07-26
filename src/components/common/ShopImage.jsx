import React from "react";

export const ShopImage = (props) => {
    return (
        <div className="col-md-12">
            <figure className="figure mb-0">
                    <img src={props.image} alt={props.alt} className="figure-img img-fluid"></img>
                <figcaption className="h6 my-1 text-center">
                    {props.caption}
                </figcaption>
            </figure>
            <div className="text-center">
                {props.children}
            </div>
        </div>        
    );
}