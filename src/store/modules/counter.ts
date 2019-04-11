import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

export const actionCreators = {
    increment: createAction(INCREMENT),
    decrement: createAction(DECREMENT)
}

export interface IState {
    count: number
}

const initialState: IState = {
    count: 0
}

export default handleActions<IState>(
    {
        [INCREMENT]: state => ({ count: state.count + 1 }),
        [DECREMENT]: state => ({ count: state.count - 1 }),
    },
    initialState
)