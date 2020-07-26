import {combineReducers} from "redux";
import categories from "./categories.js";
import products from "./products.js";
import productDetails from "./productDetails.js";
import cart from "./cart.js";
const reducers = combineReducers({
    categories,
    products,
    productDetails,
    cartList: cart
});

export default reducers;
