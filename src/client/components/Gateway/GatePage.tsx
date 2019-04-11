import * as React from 'react';

import './gatePage.scss'
import counter from '../../../store/modules/counter';

interface IState {
    count: number;
}

interface IProps {
    count: number,
    onIncrement(): void,
    onDecrement(): void
}

class GatePage extends React.Component<IProps, IState> {
    render() {
        var {count, onIncrement, onDecrement} = this.props
        return (
            <div>
                <h1>Home {count}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
}

export default GatePage