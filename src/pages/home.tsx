import * as React from 'react'
import {useEffect, useState} from 'react'
import {api} from '../api/api'
import Menu from '../components/menu'
import {SITE_NAME} from '../util/util'
import Loading from './loading'
import './style.css'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [ready, setReady] = useState(true)

    const loadData = async () => {
        let posts = await api.getPhotos()
        let ready = true
        setPosts(posts.photoset.photo)
        setReady(ready)
    }

    useEffect(() => {
        document.title = SITE_NAME
        loadData()
    }, [])

    

    // resetHome() {
    //     this.loadPage(0)
    //     backToTop()
    // }

    // isFirst() {
    //     return this.state.pageNumber == 0
    // }

    // isLast() {
    //     return this.state.posts.length < PAGE_SIZE
    // }

    // loadPage(pageNumber: number) {
    //     this.setState({pageNumber, ready: false}, () => this.loadData())
    // }

    // deletePost = async (id) => {
    //     let ok = await api.delete(id)
    //     ok && this.loadData()
    // }

    const getPost = (post) => {
        return post ? post.url_l : ''
    }

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }



    return ready ? (
        <div className="home">
            <div id="top-bar" className="top-bar">
                <Menu />
            </div>
            <div className="feed-block-background" style={{backgroundImage: 'url(' + getPost(posts[getRandomInt(0, posts.length - 1)]) + ')', opacity: posts.length == 0 ? 0 : 1}}></div>
            <div className="feed-block">
                <p className="feed-block-t">БАЗА РЕАБИЛИТАЦИИ ЖИВОТНЫХ</p>
                <p>цели</p>
                <p>задачи</p>
            </div>
        </div>
    ) : <Loading />

}

export default Posts