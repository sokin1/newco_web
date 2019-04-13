import * as React from 'react';
import { Route } from 'react-router-dom';

import SignInPageContainer from './components/Gateway/SignIn/SignInPageContainer';
import EnterPage from './components/Gateway/EnterPage';

import './app.scss'

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={EnterPage} />
                <Route path="/signin" component={SignInPageContainer} />
            </React.Fragment>
        )
    }
}