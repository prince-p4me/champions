import { delay, call, takeLatest, put } from 'redux-saga/effects';
import * as Navigation from '../navigation/navigation';
import * as Apiservice from '../services/Api';
import * as Types from "./types"
import Toast from "react-native-simple-toast";

function* login({ type, payload }) {
    try {
        // Delay 4 Seconds
        // Dispatch Action To Redux Store
        yield put({ type: Types.SET_LOADING, payload: true });//show loading

        // filtering list
        // const list1 = list.filter((el) => {
        //     return (payload.split(" ").filter(word => el.title.toLowerCase().includes(word.toLowerCase()))).length > 0;
        // });

        yield delay(4000);
        yield put({ type: Types.IS_LOGIN, payload: true });//set login true

        // Navigation.navigate("Detail");
        // yield put({ type: VIDEOS_LIST, payload: list1 }); //show loading
        yield put({ type: Types.SET_LOADING, payload: false });//hide loading
    }
    catch (error) {
        console.log(error);
    }
};

function* resendOtp({ type, payload }) {
    try {
        yield put({ type: Types.SET_LOADING, payload: true });//show loading

        let response = yield call(Apiservice.resendOtp, payload); //calling Api

        console.log("response in saga", JSON.stringify(response));
        if (response && response.message) {
            Toast.showWithGravity(response.message, Toast.SHORT, Toast.BOTTOM);
        }
        // yield put({ type: Types.IS_LOGIN, payload: true });//set login true

        // Navigation.navigate("Detail");
        // yield put({ type: VIDEOS_LIST, payload: list1 }); //show loading
        yield put({ type: Types.SET_LOADING, payload: false });//hide loading
    }
    catch (error) {
        console.log(error);
        yield put({ type: Types.SET_LOADING, payload: false });//hide loading
    }
};

// Watcher
export default function* watcher() {
    // Take Last Action Only
    yield takeLatest(Types.DO_LOGIN, login);
    yield takeLatest(Types.RESEND_OTP, resendOtp);
};