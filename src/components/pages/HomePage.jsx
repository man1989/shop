import React, { useEffect } from "react";
import { ProductCategory } from "../common/ProductCategory.jsx";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { loadCategories } from "../../redux/actions/categories";
const style = `
    .category-list > .category:nth-of-type(3),.category-list > .category:nth-of-type(4){
        display:inline-block;
        width:50%;
        padding:0;
        margin:0;
    }
`;
const Page = ({ loadCategories, categories }) => {

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <>
            <style>
                {style}
            </style>
            <Helmet>
                <title>Home - Shop</title>
            </Helmet>
            <div className="category-list">
                {
                    categories.map((category) => {
                        return (<ProductCategory
                            key={category.name}
                            banner={category.banner}
                            caption={category.title}
                            routePath={`/${category.name}`}
                        />)
                    })
                }
            </div>
        </>
    );
}

const mapStateToProps = ({ categories }) => {
    return {
        categories
    };
};

const mapDispatchToProps = {
    loadCategories
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Page);

