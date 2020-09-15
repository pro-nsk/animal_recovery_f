import * as React from 'react'
import { useEffect, useState } from 'react'
import { api } from '../api/api'
import '../css/common.css'
import AppProps from '../util/appProps'
import { isEnter } from '../util/util'

const PostEdit = (props: AppProps) => {

    const [mainImage, setMainImage] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState(undefined)

    const edit = async () => {
        try {
            const success = await api.edit(props.match.params.id, { mainImage, text })
            success && props.history.push('/news/' + props.match.params.id)
        } catch (error) {
            setError(error.error)
        }
    }

    const loadPost = async (id) => {
        try {
            const post = await api.post(id)
            setMainImage(post.mainImage)
            setText(post.text)
        } catch (err) {
            setError(err.error)
        }
    }

    useEffect(() => {
        const id = props.match.params.id
        loadPost(id)
    }, [])

    const handleTextChange = e => setText(e.target.value)
    const handleMainImageChange = e => setMainImage(e.target.value)

    return (
        <div className="form">
            {error && <div className="error">{error}</div>}
            <input value={mainImage} placeholder="url изображения новости" onChange={handleMainImageChange} onKeyPress={e => isEnter(e) && edit()} />
            <textarea value={text} placeholder="html код новости" onChange={handleTextChange} />
            <div className="pro-buttons">
                <div className="form-b-1" onClick={props.history.goBack}>Отмена</div>
                <div className="form-b-2" onClick={edit}>Сохранить</div>
            </div>
        </div>
    )
}

export default PostEdit