import * as React from 'react'
import { Link } from 'react-router-dom'

import * as styles from './header.scss'

export default class Header extends React.Component<{}, {}> {
    render() {
        return(
            <div className={styles.header}>
                <Link to="/main" className={styles.logo}>
                    <img src="https://poiemaweb.com/img/logo.png" height="36px" />
                </Link>
                <nav>
                    <ul className={styles.navItems}>
                        <li><Link to="/main">Home</Link></li>
                        <li><Link to="/main/search">Search</Link></li>
                        <li><Link to="/main/plan">My Plan</Link></li>
                        <li><Link to="/main/profile">User Profile</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}