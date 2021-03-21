import * as Types from './types';

export function doLogin(payload) {
    return {
        type: Types.DO_LOGIN,
        payload
    }
}

export function resendOtp(payload) {
    return {
        type: Types.RESEND_OTP,
        payload
    }
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

// add another actions further