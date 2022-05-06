import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeLatest, select, throttle} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE, e=>{
});
export const decrease = createAction(DECREASE, e=>e);
export function* counterSaga() {
    yield takeLatest(INCREASE, increaseService);
    yield takeLatest(DECREASE, decreaseService);
}

function* increaseService() {
    yield put(increase());
    const number = yield select(state => state.number);
    console.log(`현재 값은 ${number}입니다.`);
}
function* decreaseService() {
    yield put(decrease());
}
const initialState = {
    number: 0
}
const counter = handleActions({
    [INCREASE]: state => state.number + 1,
    [DECREASE]: state => state.number - 1
}, initialState);

export default counter;