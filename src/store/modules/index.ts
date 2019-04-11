import { combineReducers } from 'redux'
import counter, { ICounterState } from './counter'

export default combineReducers({
    counter
})

export interface IStoreState {
    counterState: ICounterState
}