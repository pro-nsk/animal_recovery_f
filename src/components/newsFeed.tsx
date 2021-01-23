import * as React from 'react'
import { useEffect, useState } from 'react'
import { api, Post } from '../api/api'
import '../css/news.css'
import AppProps from '../util/appProps'
import { Link } from 'react-router-dom'
import { isAuthenticated, stripHtml } from '../util/util'

const NewsFeed = (props: AppProps) => {

    // const [pageNumber, setPageNumber] = useState(0)
    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState(undefined)

    const loadNews = async () => {
        try {
            const posts = await api.home(0)
            posts && setPosts(posts)
        } catch (error) {
            setError(error.error)
        }
    }

    useEffect(() => {
        loadNews()
    }, [])

    const renderFeed = () => {
        return posts.map(post => <Link key={post._id} to={'news/' + post._id} ><img src={post.mainImage} /><div className="post-grid-text">{stripHtml(post.text)}</div></Link>)
    }

    return (
        <div className="news">
            <p className="fw500">Новости {isAuthenticated() && <Link to="news/create" title="Добавить новость"><img className="c-edit" src="/images/add_new.svg"/></Link>}</p>
            <div className="post-grid">
                {error && <div className="error">{error}</div>}
                {renderFeed()}
            </div>
        </div>
    )
}

export default NewsFeed