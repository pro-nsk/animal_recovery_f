import * as React from 'react'
import { Component } from 'react'
import { api } from '../api/api'
import Menu from '../components/menu'
import AppProps from '../util/appProps'
import { backToTop, SITE_NAME } from '../util/util'
import Loading from './loading'
import './style.css'

const PAGE_SIZE = 10

class Posts extends Component<AppProps> {

    state = {
        posts: [],
        menu: [],
        pageNumber: 0,
        ready: true
    }

    componentDidMount() {
        document.title = SITE_NAME
        this.loadData()
    }

    async loadData() {
        let posts = await api.home(this.state.pageNumber)
        let ready = true
        this.setState({ posts, ready })
    }

    

    next = () => {
        this.loadPage(this.state.pageNumber + 1)
        backToTop()
    }

    prev = () => {
        this.loadPage(this.state.pageNumber - 1)
        backToTop()
    }

    resetHome() {
        this.loadPage(0)
        backToTop()
    }

    isFirst() {
        return this.state.pageNumber == 0
    }

    isLast() {
        return this.state.posts.length < PAGE_SIZE
    }

    loadPage(pageNumber: number) {
        this.setState({ pageNumber, ready: false }, () => this.loadData())
    }

    deletePost = async (id) => {
        let ok = await api.delete(id)
        ok && this.loadData()
    }

    render() {

        return this.state.ready ? (
            <div className="home">
                <div id="top-bar" className="top-bar">
                    <Menu />
                </div>
                <div className="feed-block"> 
                    <p className="feed-block-t">БАЗА РЕАБИЛИТАЦИИ ЖИВОТНЫХ</p>
                    <p>цели</p>
                    <p>задачи</p>
                </div>
            </div>
        ) : <Loading />
    }
}

export default Posts