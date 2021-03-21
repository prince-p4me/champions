import * as Types from './types';

export const getBanners = (state = [], action) => {
  switch (action.type) {
    case Types.BANNERS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case Types.SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export const isLogin = (state = false, action) => {
  switch (action.type) {
    case Types.IS_LOGIN:
      return action.payload;
    default:
      return state;
  }
}

export const isRtl = (state = false, action) => {
  switch (action.type) {
    case Types.IS_RTL:
      return action.payload;
    default:
      return state;
  }
}

export const getLanguage = (state = "en", action) => {
  switch (action.type) {
    case Types.LANGUAGE:
      return action.payload;
    default:
      return state;
  }
}
