import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProductsDetails } from "../../redux/actions/products.js";
import { saveToCart } from "../../redux/actions/cart.js";
import { Markup } from "interweave";
import { SelectElement } from "../common/SelectElement.jsx";
// import { Toaster } from "../common/Toaster.jsx";
// import $ from "jquery";

function _unescapeText(text) {
    const domparser = new DOMParser();
    const document = domparser.parseFromString(text, "text/html");
    return document.body.innerText;
}


const Page = ({ loadProductsDetails, saveToCart, productDetails: product, ...props }) => {
    const { match: { params } } = props;
    // const toastRef = React.createRef();
    // const showToaster = () => {
    //     $(toastRef.current).toast('show');
    // }
    useEffect(() => {
        loadProductsDetails(`/${params.type}/${params.name}`);
    }, []);

    const onSave = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        data = Object.fromEntries(data);
        data.qty = Number(data.qty);
        data.target = `/details/${params.type}/${params.name}`
        saveToCart({...product, ...data});
    }

    return (
        <>
            {/* <Toaster ref={toastRef} /> */}
            <div className="row" style={{ paddingTop: "10%" }}>
                <div className="col-sm col-xs-12 card border-0 ">
                    <img src={product.largeImage && product.largeImage.replace("data", "")} alt={product.title} />
                </div>
                <div className="col-sm col-xs-12 card border-0 ">
                    <div className="card-body">
                        <div className="card-title">{product.title}</div>
                        <div className="card-subtitle mb-2 text-muted">{`₹${product.price * 75}`}</div>
                        <hr />
                        <form onSubmit={onSave}>
                            <SelectElement
                                label="Size"
                                name="size"
                                options={[
                                    { value: "XS", text: "XS" },
                                    { value: "S", text: "S" },
                                    { value: "M", text: "M" },
                                    { value: "L", text: "L" },
                                    { value: "XL", text: "XL" }]}
                            />
                            <SelectElement
                                label="Quantity"
                                name="qty"
                                options={[
                                    { value: "1", text: "1" },
                                    { value: "2", text: "2" },
                                    { value: "3", text: "3" },
                                    { value: "4", text: "4" },
                                    { value: "5", text: "5" }]}
                            />
                            <div>
                                <h5><small>Description</small></h5>
                                <small><Markup content={_unescapeText(product.description)} /></small>
                                <button className="btn btn-dark btn-sm" type="submit">Add Cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ({ productDetails }) => {
    return {
        productDetails
    };
};

const mapDispatchToProps = {
    loadProductsDetails,
    saveToCart
};

export const DetailsPage = connect(mapStateToProps, mapDispatchToProps)(Page)