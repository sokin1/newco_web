import * as React from 'react'
import Plan from './Plan'
import { actionCreators as PlanActions } from '../../../../store/modules/plan'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IStoreState } from '../../../../store/modules'

type Props = {
    plan: object,
    PlanActions: typeof PlanActions
}

class PlanContainer extends React.Component<Props> {
    render() {
        const { plan } = this.props

        return (
            <Plan plan={plan} />
        )
    }
}

export default connect(
    ({ plan }: IStoreState) => ({
        plan: plan.plan
    })
)(PlanContainer)