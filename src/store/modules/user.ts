import { Record } from 'immutable'
import { createAction, handleActions, Action } from 'redux-actions'

const CREATE = 'user/CREATE'
const REMOVE = 'user/REMOVE'
const UPDATEINFO = 'user/UPDATEINFO'

type CreatePayload = object
type RemovePayload = object
type UpdateInfoPayload = object

export const actionCreators = {
    create: createAction<CreatePayload>(CREATE),
    remove: createAction<RemovePayload>(REMOVE),
    updateinfo: createAction<UpdateInfoPayload>(UPDATEINFO)
}

export interface IUserState {
    user: object
}

const initialState: IUserState = {
    user: {}
}

export default handleActions<IUserState>(
    {
        [CREATE]: (state, action: Action<CreatePayload>): IUserState => {
            return state
        },
        [REMOVE]: (state, action: Action<RemovePayload>): IUserState => {
            return state
        },
        [UPDATEINFO]: (state, action: Action<UpdateInfoPayload>): IUserState => {
            return state
        }
    },
    initialState
)