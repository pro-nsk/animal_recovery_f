import * as React from 'react'
import {Redirect, Route, Router, Switch} from 'react-router'
import Home from './pages/home'
import AppProps from './util/appProps'
import {createContext, useState} from 'react'
import {Paragraphs} from './util/util'
import Loading from './pages/loading'
import TopBar from './components/topbar'
import Footer from './components/footer'

export const TopbarContext = createContext({topbar: Paragraphs.about, func: id => console.log(id)})

const App = (props: AppProps) => {

    const [paragraphId, setParagraphId] = useState(Paragraphs.about)
    const [ready] = useState(true)

    return ready ? (
        <TopbarContext.Provider value={{topbar: paragraphId, func: id => setParagraphId(id)}}>
            <div className="home">
                <TopBar />
                <Router history={props.history}>
                    <Switch>
                        <Route path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
                <Footer />
            </div>
        </TopbarContext.Provider>
    ) : <Loading />
}

export default App