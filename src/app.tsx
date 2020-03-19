import * as React from 'react'
import {Redirect, Route, Router, Switch} from 'react-router'
import Home from './pages/home'
import AppProps from './util/appProps'
import {useState} from 'react'
import Loading from './pages/loading'
import TopBar from './components/topbar'
import Footer from './components/footer'
import Mission from './pages/mission'
import ContextProvider from './components/contextProvider'

const App = (props: AppProps) => {

    const [ready, setReady] = useState(false)

    return (
        <ContextProvider readyFunc={setReady}>
            {ready ? (
                <div className="home">
                    <TopBar />
                    <Router history={props.history}>
                        <Switch>
                            <Route path="/mission" component={Mission} />
                            <Route path="/" component={Home} />
                            <Redirect to="/" />
                        </Switch>
                    </Router>
                    <Footer />
                </div>
            ) : <Loading />}
        </ContextProvider>
    )
}

export default App