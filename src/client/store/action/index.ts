import { INCREMENT, DECREMENT, ActionType } from '../types'

export function increment(): ActionType {
    return {
        type: INCREMENT
    }
}

export function decremenet(): ActionType {
    return {
        type: DECREMENT
    }
}