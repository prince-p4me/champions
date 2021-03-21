import {delay, call, takeLatest, put} from 'redux-saga/effects';
import * as Navigation from '../navigation/navigation';
import * as Apiservice from '../services/Api';
import * as Types from './types';
import Toast from 'react-native-simple-toast';
import {BackHandler} from 'react-native';

function showResponse(response) {
  if (response && response.message) {
    Toast.showWithGravity(response.message, Toast.SHORT, Toast.BOTTOM);
  }
}

function* getPoints({type, payload}) {
  try {
    // Delay 4 Seconds
    // Dispatch Action To Redux Store
    console.log('payload', JSON.stringify(payload));
    yield put({type: Types.SET_LOADING, payload: true}); //show loading
    let response = yield call(Apiservice.getPoints, {mobile: payload}); //calling Api
    yield put({type: Types.POINTS, payload: response}); //hide loading
    yield put({type: Types.SET_LOADING, payload: false});
    // yield put({ type: Types.IS_LOGIN, payload: true }); //set login true

    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
  } catch (error) {
    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
    console.log('error login', JSON.stringify(error));
  }
}

function* verifyOtp({type, payload}) {
  try {
    yield put({type: Types.SET_LOADING, payload: true}); //show loading

    let response = yield call(Apiservice.verifyOtp, payload); //calling Api

    console.log('response in saga', JSON.stringify(response));
    showResponse(response);
    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
    if (response && response.status) {
      yield put({type: Types.USER, payload: response}); //hide loading
      yield put({type: Types.IS_LOGIN, payload: true}); //hide loading
    }
  } catch (error) {
    console.log(error);
    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
  }
}

function* resendOtp({type, payload}) {
  try {
    yield put({type: Types.SET_LOADING, payload: true}); //show loading

    let response = yield call(Apiservice.resendOtp, payload); //calling Api

    console.log('response in saga', JSON.stringify(response));
    showResponse(response);
    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
  } catch (error) {
    console.log(error);
    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
  }
}

function* getBanners({type, payload}) {
  try {
    yield put({type: Types.SET_LOADING, payload: true});
    let response = yield call(Apiservice.getBanners, payload); //calling Api
    console.log('response in saga', JSON.stringify(response));
    yield put({type: Types.BANNER_LIST, payload: response.data}); //hide loading
    yield put({type: Types.SET_LOADING, payload: false});
  } catch (error) {
    console.log(error);
    yield put({type: Types.SET_LOADING, payload: false});
  }
}

function* login({type, payload}) {
  try {
    yield put({type: Types.SET_LOADING, payload: true}); //show loading
    let response = yield call(Apiservice.getPoints, {mobile: payload}); //calling Api
    if (response && response.status) {
      Navigation.navigate('Otp', {
        mobile: payload,
        name: response.name,
        login: true,
      });
    }
    showResponse(response);
    // yield put({ type: Types.IS_LOGIN, payload: true }); //set login true

    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
  } catch (error) {
    yield put({type: Types.SET_LOADING, payload: false}); //hide loading
    console.log('error login', JSON.stringify(error));
  }
}

function* logOut({type, payload}) {
  try {
    yield put({type: Types.SET_LOADING, payload: true});
    yield put({type: Types.USER, payload: {}});
    yield put({type: Types.IS_LOGIN, payload: false}); //hide loading
    yield put({type: Types.SET_LOADING, payload: false});
    showResponse({message: 'Logged out successfully . . .'});
    setTimeout(() => {
      BackHandler.exitApp();
    }, 1000);
  } catch (error) {
    console.log(error);
    yield put({type: Types.SET_LOADING, payload: false});
  }
}

// Watcher
export default function* watcher() {
  // Take Last Action Only
  yield takeLatest(Types.DO_LOGIN, login);
  yield takeLatest(Types.RESEND_OTP, resendOtp);
  yield takeLatest(Types.GET_BANNERS, getBanners);
  yield takeLatest(Types.VERIFY_OTP, verifyOtp);
  yield takeLatest(Types.LOG_OUT, logOut);
}
