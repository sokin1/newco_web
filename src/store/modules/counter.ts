import { createAction, handleActions } from 'redux-actions'
import { ICounterState } from '../../types'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

export const actionCreators = {
    increment: createAction(INCREMENT),
    decrement: createAction(DECREMENT)
}

const initialState: ICounterState = {
    count: 0
}

export default handleActions<ICounterState>(
    {
        [INCREMENT]: state => ({ count: state.count + 1 }),
        [DECREMENT]: state => ({ count: state.count - 1 }),
    },
    initialState
)