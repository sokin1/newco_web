import { createAction, handleActions, Action } from 'redux-actions'
import { IUserState } from '../../types'

// const CREATE = 'user/CREATE'
// const REMOVE = 'user/REMOVE'
const UPDATEINFO = 'user/UPDATEINFO'

// type CreatePayload = object
// type RemovePayload = object
type UpdateInfoPayload = { user: object, userId: string }

export const actionCreators = {
    // create: createAction<CreatePayload>(CREATE),
    // remove: createAction<RemovePayload>(REMOVE),
    updateinfo: createAction<UpdateInfoPayload>(UPDATEINFO)
}

const initialState: IUserState = {
    user: { username: 'noname' },
    userId: "1"
}

export default handleActions<IUserState>(
    {
        // [CREATE]: (state, action: Action<CreatePayload>): IUserState => {
        //     return <IUserState> action.payload
        // },
        // [REMOVE]: (state, action: Action<RemovePayload>): IUserState => {
        //     return <IUserState> action.payload
        // },
        [UPDATEINFO]: (state, action: Action<UpdateInfoPayload>): IUserState => ({ user: action.payload.user, userId: action.payload.userId })
    },
    initialState
)