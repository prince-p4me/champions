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

export function setRtl(payload) {
  return {
    type: Types.IS_RTL,
    payload
  }
}

export function setLanguage(payload) {
  return {
    type: Types.LANGUAGE,
    payload
  }
}

export function verifyOtp(payload) {
  return {
    type: Types.VERIFY_OTP,
    payload
  }
}

// add another actions further
