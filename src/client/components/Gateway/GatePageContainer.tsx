import * as React from 'react'
import GatePage from './GatePage'
import { actionCreators as counterActions } from '../../../store/modules/counter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IStoreState } from 'store/modules'

type Props = {
    count: number;
    CounterActions: typeof counterActions
}

class GatePageContainer extends React.Component<Props> {
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
            <GatePage
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                count={count}
            />
        )
    }
}

export default connect(
    ({ counterState }: IStoreState) => ({
        count: counterState.count
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(GatePageContainer)