import * as Types from './types';

export function doLogin(payload) {
    return {
        type: Types.DO_LOGIN,
        payload
    }
}

// add another actions further