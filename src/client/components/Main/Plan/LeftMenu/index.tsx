import * as React from 'react'

import ScheduleList from './ScheduleList'
import * as styles from './leftMenu.scss'

type Props = {
    plan: object
}

const PlanOverview: React.SFC<Props> = ({plan}) => (
    <ul>
        <li>{plan['country']}</li>
        <li>{plan['Date']}</li>
    </ul>
)

export default class LeftMenu extends React.Component<Props> {
    render() {
        const { plan } = this.props

        
        const list = Object.keys(plan['schedules']).map(date => {
            return <ScheduleList date={date} schedules={plan['schedules'][date]} />
        })

        console.log(list)

        return(
            <div className={styles.nav}>
                <input type="checkbox" id="menu" />
                <label htmlFor="menu">&#9776;</label>

                <div className={styles.multiLevel}>
                    <div className={styles.item}>
                        <input type="checkbox" id="A" />
                        <label htmlFor="A">Plan Overview</label>
                        <PlanOverview plan={plan}/>
                    </div>
                    <div className={styles.item}>
                        <input type="checkbox" id="B" />
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}