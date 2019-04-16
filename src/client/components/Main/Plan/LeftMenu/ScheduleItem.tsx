import * as React from 'react'

type Props = {
    item: Array<object>
}

export default class ScheduleItem extends React.Component<Props> {
    render() {
        const { item } = this.props
        const list = item.map(i => {
            <li>{i['location']}</li>
        })
        return(
            <ul>
                {list}
            </ul>
        )
    }
}