import React from "react";
import {Category} from "../common/Category.jsx";

export const HomePage = () => {
    return (
        <>
        <Category 
        banner={"/images/mens_outerwear.jpg"}
        caption={"Men's Outwear"}
        routePath={"/mens_outerwear"}
        />
        </>
    );
}