import * as React from 'react';
import { Route } from 'react-router-dom';

import GatePage from './components/Gateway/GatePage'

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Route exact path="/" component={GatePage} />
            </div>
        )
    }
}