import * as React from 'react'
import { useState, useEffect } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router'
import ContextProvider from './components/contextProvider'
import Footer from './components/footer'
import TopBar from './components/topbar'
import History from './pages/history'
import Home from './pages/home'
import Loading from './pages/loading'
import Mission from './pages/mission'
import AppProps from './util/appProps'

const App = (props: AppProps) => {

    const [ready, setReady] = useState(false)

    useEffect(() => {
        props.history.listen((location) => {
            if (!location.hash) {
                window.scrollTo(0, 0)
            }
        })
    }, [])

    return (
        <ContextProvider readyFunc={setReady}>
            {ready ? (
                <div className="main-content">
                    <TopBar {...props} />
                    <div className="page-content">
                        <Router history={props.history}>
                            <Switch>
                                <Route path="/mission" component={Mission} />
                                <Route path="/history" component={History} />
                                <Route path="/" component={Home} />
                                <Redirect to="/" />
                            </Switch>
                        </Router>
                    </div>
                    <Footer />
                </div>
            ) : <Loading />}
        </ContextProvider>
    )
}

export default App