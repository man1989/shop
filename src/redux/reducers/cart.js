import {SAVE_TO_CART, FETCH_CART_LIST, DELETE_FROM_CART, UPDATE_CART} from "../actions/actionTypes.js";

function deleteData(state, name){
    const data = state.filter((p)=>(p.name !== name));
    return data;
}

function updateData(state, name, qty){
    const data = state.map((p) => {
        if(p.name === name){
            p.qty = qty;
        }
        return p;
    });
    return data;
}

export default function cart(state=[], action){
    switch(action.type){
        case SAVE_TO_CART:
            return [...state, action.product]
        case DELETE_FROM_CART:
            return deleteData(state, action.name);
        case UPDATE_CART:
            return state.map((p) => p.name === action.name?((p.qty=action.qty) && p): p);
        case FETCH_CART_LIST:
            return state;
        default:
            return state;
    }
}