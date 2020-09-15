import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api/api'
import Loading from '../pages/loading'
import '../css/post.css'
import AppProps from '../util/appProps'
import { isAuthenticated, SITE_NAME, stripHtml } from '../util/util'

const PostComponent = (props: AppProps) => {

    const [mainImage, setMainImage] = useState('')
    const [text, setText] = useState('')
    const [id, setId] = useState('')
    const [error, setError] = useState(undefined)
    const [ready, setReady] = useState(false)


    const auth = isAuthenticated()

    const injectPostHtml = (html) => {
        const div = document.getElementById('text')
        if (div) {
            div.innerHTML = html
        }
    }

    const loadPost = async (id) => {
        try {
            const post = await api.post(id)
            setReady(true)
            setMainImage(post.mainImage)
            setText(post.text)
            setId(post._id as any)

            const title = post.text ? stripHtml(post.text.substring(0, 50)) + '... - БРЖ Кольцово' : SITE_NAME
            document.title = title

            injectPostHtml(post.text)
        } catch (err) {
            setError(err.error)
            setReady(false)
        }
    }

    useEffect(() => {
        const id = props.match.params.id
        loadPost(id)
    }, [])

    const deletePost = async (id) => {
        const ok = await api.delete(id)
        ok && props.history.push('/')
    }

    return ready ? (
        <div className="post-list">
            <div className="post">
                {error && <div className="error">{error}</div>}
                <img src={mainImage} />
                {text && <div id="text" className={'text-l'}></div>}
                <div className="control">
                    {<Link className="view" to={`${id}`} >ссылка</Link>}
                    {auth && <div className="delete" onClick={() => deletePost(id)}>удалить</div>}
                    {auth && <Link className="edit" to={`${id}/edit`} >редактировать</Link>}
                </div>
            </div>
        </div>
    ) : <Loading />
}

export default PostComponent