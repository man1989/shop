import {FETCH_CATEGORIES_SUCCESS} from "./actionTypes";
import {fetchCategories} from "../../api/categoriesApi.js";

export function fetchCategoriesSuccess(categories){
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        categories
    };
}

export function loadCategories(){
    return async (dispatch) => {
        const categories = await fetchCategories();
        return dispatch(fetchCategoriesSuccess(categories));
    }
}