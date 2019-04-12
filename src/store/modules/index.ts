import { combineReducers } from 'redux'
import { ICounterState, IUserState } from '../../types'
import user from '../../store/modules/user'
import counter from '../../store/modules/counter'

export default combineReducers({
    counter,
    user
})

export interface IStoreState {
    counter: ICounterState,
    user: IUserState
}