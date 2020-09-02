import * as React from 'react'
import { useEffect, useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router'
import ContextProvider from './components/contextProvider'
import Footer from './components/footer'
import TopBar from './components/topbar'
import History from './pages/history'
import Home from './pages/home'
import Loading from './pages/loading'
import Login from './pages/login'
import Logout from './pages/logout'
import Mission from './pages/mission'
import Register from './pages/register'
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
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                <Route path="/logout" component={Logout} />
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