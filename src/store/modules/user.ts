import { createAction, handleActions, Action } from 'redux-actions'
import { IUserState } from '../../types'

// const CREATE = 'user/CREATE'
// const REMOVE = 'user/REMOVE'
const UPDATEINFO = 'user/UPDATEINFO'

// type CreatePayload = object
// type RemovePayload = object
type UpdateInfoPayload = object

export const actionCreators = {
    // create: createAction<CreatePayload>(CREATE),
    // remove: createAction<RemovePayload>(REMOVE),
    updateinfo: createAction<UpdateInfoPayload>(UPDATEINFO)
}

const initialState: IUserState = {
    user: {}
}

export default handleActions<IUserState>(
    {
        // [CREATE]: (state, action: Action<CreatePayload>): IUserState => {
        //     return <IUserState> action.payload
        // },
        // [REMOVE]: (state, action: Action<RemovePayload>): IUserState => {
        //     return <IUserState> action.payload
        // },
        [UPDATEINFO]: (state, action: Action<UpdateInfoPayload>): IUserState => {
            return <IUserState> action.payload
        }
    },
    initialState
)