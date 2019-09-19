import * as React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router'

import Posts from './pages/home'

import AppProps from './util/appProps'

class App extends React.Component<AppProps> {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    
                    <Route path="/" component={Posts} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}

export default App