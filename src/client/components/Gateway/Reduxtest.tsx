import * as React from 'react';

import './reduxtest.scss'

type Props = {
    count: number;
    onIncrement(): void;
    onDecrement(): void;
}

const Reduxtest: React.FunctionComponent<Props> = ({ count, onIncrement, onDecrement }) => (
    <div>
        <h1>Home {count}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

export default Reduxtest