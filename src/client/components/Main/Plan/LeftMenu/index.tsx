import * as React from 'react'

type Props = {
    plan: object
}
const LeftMenu: React.SFC<Props> = ({plan}) => (
    <h1>LeftMenu {plan["country"]}</h1>
)

export default LeftMenu;