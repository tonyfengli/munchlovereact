import * as actionTypes from "./actionTypes";
import axios from "axios"; 



export const getBusinesses = (businesses) => {
    return {
        type: actionTypes.GET_BUSINESSES,
        businesses: businesses
    }
}

export const getFavorites = (favorites) => {
    return {
        type: actionTypes.GET_FAVORITES,
        favorites: favorites
    }
}

export const fetchBusinessesFailed = () => {
    return {
        type: actionTypes.FETCH_BUSINESSES_FAILED
    }
}


export const renderBusinesses = (query) => {
    return dispatch => {
        axios.get(query)
        .then(response => {
            console.log(response.data);
            dispatch(getBusinesses(response.data));
        })
        .catch(error => {
            dispatch(fetchBusinessesFailed());
        })
    }
}

export const renderFavorites = (query) => {
    return dispatch => {
        axios.get(query)
        .then(response => {
            console.log(response);
            dispatch(getFavorites(response.data));
        })
        .catch(error => {
            dispatch(fetchBusinessesFailed());
        })
    }
}

