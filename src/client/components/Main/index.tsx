import * as React from 'react'

import Header from './Header'
import Footer from './Footer'

import Search from './Search'
import UserProfile from './UserProfile'

import { Switch, Route } from 'react-router-dom'
import PlanContainer from './Plan/PlanContainer';

export default class Main extends React.Component<{}, {}> {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/main/search" component={Search} />
                    <Route path="/main/plan" component={PlanContainer} />
                    <Route path="/main/profile" component={UserProfile} />
                </Switch>
                <Footer />
            </React.Fragment>
            
        )
    }
}