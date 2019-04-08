import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        )
    }
}