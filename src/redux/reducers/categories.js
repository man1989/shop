import { FETCH_CATEGORIES_SUCCESS } from "../actions/actionTypes.js"

export default function categories(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return action.categories;
        default:
            return state;
    }
}