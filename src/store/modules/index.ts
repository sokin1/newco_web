import { combineReducers } from 'redux'
import counter, { ICounterState } from './counter'
import user, { IUserState } from './user'

export default combineReducers({
    counter,
    user
})

export interface IStoreState {
    counterState: ICounterState,
    userState: IUserState
}