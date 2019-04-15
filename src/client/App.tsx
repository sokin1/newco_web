import * as React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';

import './app.scss'

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/main" component={Main} />
            </React.Fragment>
        )
    }
}