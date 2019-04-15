import { createAction, handleActions } from 'redux-actions'
import { IPlanState } from '../../types'

const ADD = 'plan/ADD'
const REMOVE = 'plan/REMOVE'
const UPDATE = 'plan/UPDATE'

export const actionCreators = {
    add: createAction(ADD),
    remove: createAction(REMOVE),
    update: createAction(UPDATE)
}

const initialState: IPlanState = {
    plan: {"country": "Korea", "Date": "2019/07/01 - 2019/07/14"}
}

export default handleActions<IPlanState>(
    {}, initialState
)