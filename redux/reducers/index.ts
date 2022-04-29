import { ActionTypes } from '@mui/base'
import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import users from './userReducer.ts'

const rootReducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
        return {
          ...state,
          ...action.payload,
        };
      }
      return combineReducers({
        // admins,
        // basics,
        // boards,
        // games,
        // todos,
        users
      })(state, action)
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>