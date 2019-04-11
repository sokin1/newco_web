import { combineReducers } from 'redux'
import counter, { IState } from './counter'

export default combineReducers({
    counter
})

export interface IStoreState {
    counter: IState
}