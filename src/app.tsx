import * as React from 'react'
import {Redirect, Route, Router, Switch} from 'react-router'
import Home from './pages/home'
import AppProps from './util/appProps'
import {createContext, useState} from 'react'

const paragraphs = {
    about: 'about',
    operations: 'operations',
    partners: 'partners',
    menuRequisites: 'menu-requisites'
}

const TopbarContext = createContext(paragraphs.about)

const App = (props: AppProps) => {

    const [paragraphId, setParagraphId] = useState('about')

    return (
        <TopbarContext.Provider value={paragraphs.about}>
            <Router history={props.history}>
                <Switch>
                    <Route path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </TopbarContext.Provider>
    )

}

export default App