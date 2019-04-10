export interface IState {
    count: number;
};

export interface IAction {
    type: string
};

export const INCREMENT = 'INC';
export const DECREMENT = 'DEC';

interface IncrementAction {
    type: typeof INCREMENT
}

interface DecrementAction {
    type: typeof DECREMENT
}

export type ActionType = IncrementAction | DecrementAction