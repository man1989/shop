import {FETCH_PRODUCTS_DETAILS_SUCCESS, SAVE_TO_CART} from "../actions/actionTypes.js";

export default function productDetails(state=[], action){
    switch(action.type){
        case FETCH_PRODUCTS_DETAILS_SUCCESS:
            return action.productDetails
        default:
            return state;
    }
}