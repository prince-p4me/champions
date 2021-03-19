import * as Types from './types';
// import initlist from "../assets/json/list";

const initialState = {
    list: []
};

export const getVideosList = (state = initialState, action) => {
    switch (action.type) {
        case Types.VIDEOS_LIST:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case Types.SET_LOADING:
            return action.payload;
        default:
            return state;
    }
}

export const isLogin = (state = false, action) => {
    switch (action.type) {
        case Types.IS_LOGIN:
            return action.payload;
        default:
            return state;
    }
}