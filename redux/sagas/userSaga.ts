import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '../reducers/userReducer.ts';
import { postUser } from '../api/userApi.ts'

interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserLoginType{
    type: string;
    payload: {
        userid:string, password:string
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response : UserJoinSuccessType = yield postUser(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
/**
function* login(user: UserLoginType){
    try{
        const response : UserJoinSuccessType = yield login(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         yield put(userActions.joinFailure(error))
    }
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
} */ 