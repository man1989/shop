import {FETCH_MENS_OUTERWEAR_SUCCESS} from "../actions/actionTypes.js";

export default function outerWear(state=[], action){
    switch(action.type){
        case FETCH_MENS_OUTERWEAR_SUCCESS:
            return action.mensOuterwear
        default:
            return state;
    }
}