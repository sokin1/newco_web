import * as React from 'react'

import LeftMenu from './LeftMenu'
import Detail from './Detail'

type Props = {
    plan: object
}

const Plan: React.SFC<Props> = ({plan}) => (
    <div>
        <LeftMenu plan={plan}/>
        <Detail />
    </div>
)

export default Plan;