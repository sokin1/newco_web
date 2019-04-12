import * as React from 'react';
import { Route } from 'react-router-dom';

import GatePageContainer from './components/Gateway/GatePageContainer';
import SignInPageContainer from './components/Gateway/SignIn/SignInPageContainer';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Route exact path="/" component={GatePageContainer} />
                <Route path="/signin" component={SignInPageContainer} />
            </div>
        )
    }
}