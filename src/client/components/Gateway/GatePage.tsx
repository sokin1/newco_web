import * as React from 'react';

import './gatePage.scss'

type Props = {
    count: number;
    onIncrement(): void,
    onDecrement(): void
}

const GatePage: React.FunctionComponent<Props> = ({ count, onIncrement, onDecrement }) => (
    <div>
        <h1>Home {count}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

// class GatePage extends React.Component<IProps, {}> {
//     render() {
//         var {count, onIncrement, onDecrement} = this.props
//         return (
//             <div>
//                 <h1>Home {count}</h1>
//                 <button onClick={onIncrement}>+</button>
//                 <button onClick={onDecrement}>-</button>
//             </div>
//         )
//     }
// }

export default GatePage