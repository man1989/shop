import {fetchProducts} from "../../api/productsApi.js";
import {FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_DETAILS_SUCCESS} from "./actionTypes";

export function fetchProductDetailsSuccess(productDetails){
    return {
        type: FETCH_PRODUCTS_DETAILS_SUCCESS,
        productDetails
    }
}

export function fetchProductsSuccess(products){
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products
    }
}


export function loadProducts(type){
    return async (dispatch) => {
        const products = await fetchProducts(type);
        // if(type==="/mens_outerwear"){
        //     return dispatch(fetchMensOuterWearSuccess(outerwear))
        // }else if(type==="/ladies_outerwear"){
        //     return dispatch(fetchLadiesOuterWearSuccess(outerwear))
        // }
        return dispatch(fetchProductsSuccess(products));
    }
}

export function loadProductsDetails(type){
    return async (dispatch) => {
        const products = await fetchProducts(type);
        return dispatch(fetchProductDetailsSuccess(products));
    }
}
