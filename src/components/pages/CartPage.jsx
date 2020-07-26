import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCartList, deleteFromCart, updateCart } from "../../redux/actions/cart.js";
import { connect } from "react-redux";
import { ProductGrid } from "../common/ProductGrid.jsx"

const Page = ({ fetchCartList, deleteFromCart, updateCart, products }) => {

    useEffect(() => {
        fetchCartList();
    }, []);

    const [productTotal, setProductTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            return products.reduce((total, { price, qty }) => (total + (price * qty)), 0);
        }
        const total = calculateTotal();
        setProductTotal(total);
    }, [products]);

    const handleDelete = (product) => {
        deleteFromCart(product.name);
    };
    const handleChange = (product, event) => {
        const qty = Number(event.target.value);
        updateCart(product.name, qty);
    };

    return (
        <div>
            <div className="text-center" style={{ margin: "5% 0 3% 0" }}>
                <h5 className="mb-0">Your Cart</h5>
                <small className="text-muted">({products.length}item)</small>
            </div>
            {
                products.map((product) => {
                    return (
                        <ProductGrid key={product.name} product={product} onDelete={handleDelete.bind(null, product)} onChange={handleChange.bind(null, product)} />
                    );
                })
            }
            <div className="d-flex justify-content-end align-items-center" style={{ "marginRight": "12%" }}>
                <div className="pr-4 mr-4">
                    <span className="pr-4">Total:</span>
                    <span>₹{Math.round((Number.EPSILON + productTotal * 75) * 100) / 100}</span>
                </div>
                <Link to="/checkout">
                    <button className="btn btn-dark btn-sm px-4">Checkout</button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cartList }) => {
    const products = cartList.reduce((result, product) => {
        product.image = product.image.replace("data", "");
        const old = result.find(p => p.name === product.name);
        if (old) {
            old.qty += product.qty
        } else {
            result.push(product)
        }
        return result;
    }, []);
    return {
        products
    };
}

const mapDispatchToProps = {
    fetchCartList,
    deleteFromCart,
    updateCart
};

export const CartPage = connect(mapStateToProps, mapDispatchToProps)(Page);