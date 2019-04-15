import { combineReducers } from 'redux'
import { ICounterState, IUserState, IPlanState } from '../../types'
import user from '../../store/modules/user'
import counter from '../../store/modules/counter'
import plan from '../../store/modules/plan'

export default combineReducers({
    counter,
    user,
    plan
})

export interface IStoreState {
    counter: ICounterState,
    user: IUserState,
    plan: IPlanState
}