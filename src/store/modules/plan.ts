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
    plan: {"country": "Korea", "Date": "2019/07/01 - 2019/07/14", "schedules": {
        "2019/07/01": [
            {
                "location": "Namsan Tower",
                "type": "Sight Seeing",
                "from": new Date(),
                "to": new Date(),
                "price": "$20",
                "description": "description",
                "author": "Jack Kim"
            },
            {
                "location": "Gangnam Station",
                "type": "Dinner",
                "from": new Date(),
                "to": new Date(),
                "price": "$50",
                "description": "description for lunch",
                "author": "Jack Kim"
            }
        ],
        "2019/07/02": [
            {
                "location": "Dong Dae Moon",
                "type": "Shopping",
                "from": new Date(),
                "to": new Date(),
                "price": "$100",
                "description": "description for shopping",
                "author": "Min Choi"
            },
            {
                "location": "Seoul Station",
                "type": "Travel",
                "from": new Date(),
                "to": new Date(),
                "price": "$30",
                "description": "description for travel",
                "author": "Min Choi"
            }
        ]
    }, "author": "Jack Kim", "PostedOn": "2019/06/20"}
}

export default handleActions<IPlanState>(
    {}, initialState
)