import * as React from 'react';
import { Route } from 'react-router-dom';

import GatePageContainer from './components/Gateway/GatePageContainer';

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Route exact path="/" component={GatePageContainer} />
            </div>
        )
    }
}