import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './basic/counter';
import signup, { registerSaga } from './auth/register';
import signin, { loginSaga } from './auth/login';

const rootReducer = combineReducers({
  counter, signup,signin

});

export function* rootSaga() {
  yield all([ registerSaga(), counterSaga(),loginSaga()]);
}

export default rootReducer;