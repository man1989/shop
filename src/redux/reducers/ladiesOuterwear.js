import {FETCH_LADIES_OUTERWEAR_SUCCES} from "../actions/actionTypes.js";

export default function ladiesOuterwear(state=[], action){
    switch(action.type){
        case FETCH_LADIES_OUTERWEAR_SUCCES:
            return action.ladiesOuterwear
        default:
            return state;
    }
}