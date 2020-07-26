import {SAVE_TO_CART, FETCH_CART_LIST, DELETE_FROM_CART, UPDATE_CART} from "./actionTypes.js";

export function saveToCart(product){
    return {
        type: SAVE_TO_CART,
        product
    }
}

export function deleteFromCart(name){
    return {
        type: DELETE_FROM_CART,
        name
    }
}

export function updateCart(name, qty){
    return {
        type: UPDATE_CART,
        name,
        qty
    }
}

export function fetchCartList(){
    return {
        type: FETCH_CART_LIST
    }
}