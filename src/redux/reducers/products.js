import {FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_DETAILS_SUCCESS} from "../actions/actionTypes.js";

export default function outerWear(state=[], action){
    switch(action.type){
        case FETCH_PRODUCTS_SUCCESS:
            return action.products
        default:
            return state;
    }
}