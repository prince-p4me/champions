import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as Navigation from '../navigation/navigation';
import * as Types from "./types"
// import list from '../assets/json/list';

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

// Watcher
export default function* watcher() {
    // Take Last Action Only
    yield takeLatest(Types.DO_LOGIN, login);
};