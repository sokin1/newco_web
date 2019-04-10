import * as React from 'react';
import { connect } from 'react-redux';

import './gatePage.scss'

interface IState {
    count: number;
}

interface IProps {
}

const initialState: IState = {
    count: 0
}

function mapStateToProps(state: IState=initialState) {
    return {
        count: state.count
    };
}

class GatePage extends React.Component<IProps, IState> {
    onInc = () => {
        this.props.dispatch({ type: 'INC' })
    }

    onDec = () => {
        this.props.dispatch({ type: 'DEC' })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.onInc}>+</button>
                { this.props.count }
                <button onClick={this.onDec}>-</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(GatePage)