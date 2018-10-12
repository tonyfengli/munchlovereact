import * as actionTypes from "../actions/actionTypes";
import { updateObject } from '../utility';

const initialState = {
    businesses: [],
    favorites: [],
    error: false,
    locationInput: ""
}

const getBusinesses = (state, action) => {
    return updateObject( state, {
        businesses: action.businesses,
        error: false
    } );
};

const getFavorites = (state, action) => {
    return updateObject( state, {
        favorites: action.favorites,
        error: false
    } );
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUSINESSES: return getBusinesses(state, action); 
        case actionTypes.GET_FAVORITES: return getFavorites(state, action); 
        default:
            return state;
    }
};

export default reducer;