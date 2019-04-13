import * as React from 'react'
import Reduxtest from './Reduxtest'
import { actionCreators as counterActions } from '../../../store/modules/counter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IStoreState } from '../../../store/modules'

type Props = {
    count: number;
    CounterActions: typeof counterActions
}

class ReduxtestContainer extends React.Component<Props> {
    onIncrement = () => {
        const { CounterActions } = this.props
        CounterActions.increment()
    }

    onDecrement = () => {
        const { CounterActions } = this.props
        CounterActions.decrement()
    }

    render() {
        const { onIncrement, onDecrement } = this
        const { count } = this.props

        return (
            <Reduxtest
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                count={count}
            />
        )
    }
}

export default connect(
    ({ counter }: IStoreState) => ({
        count: counter.count
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(ReduxtestContainer)