import * as React from 'react'

import * as styles from './leftMenu.scss'

type Props = {
    date: string,
    schedules: Array<object>
}

export default class ScheduleList extends React.Component<Props> {
    render() {
        const { date, schedules } = this.props

        const list = schedules.map(item => {
            <li>{item['location']}</li>
        })

        console.log(list)

        return(
            <ul>
                {list}
            </ul>
        )
    }
}

// const ScheduleList: React.SFC<Props> = ({schedules}) => (
//     Object.keys(schedules).forEach(date => {
//         schedules['date']
//     })
// )