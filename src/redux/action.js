import * as Types from './types';

export function doLogin(payload) {
  return {
    type: Types.DO_LOGIN,
    payload,
  };
}

export function resendOtp(payload) {
  return {
    type: Types.RESEND_OTP,
    payload,
  };
}

export function getBanners(payload) {
  return {
    type: Types.GET_BANNERS,
    payload,
  };
}

// add another actions further
