import * as React from 'react'
import { useState } from 'react'
import { api } from '../api/api'
import '../css/common.css'
import AppProps from '../util/appProps'
import { isEnter } from '../util/util'

const PostCreate = (props: AppProps) => {

    const [mainImage, setMainImage] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState(undefined)

    const create = async () => {
        try {
            const success = await api.create({mainImage, text})
            success && props.history.push('/')
        } catch (error) {
            setError(error.error)
        }
    }

    const handleTextChange = e => setText(e.target.value)
    const handleMainImageChange = e => setMainImage(e.target.value)

    return (
        <div className="form">
            {error && <div className="error">{error}</div>}
            <input placeholder="url главного изображения новости" onChange={handleMainImageChange} onKeyPress={e => isEnter(e) && create()} />
            <textarea placeholder="html код новости" onChange={handleTextChange} />
            <div className="pro-buttons">
                <div className="form-b-1" onClick={props.history.goBack}>Отмена</div>
                <div className="form-b-2" onClick={create}>Сохранить</div>
            </div>
        </div>
    )
}

export default PostCreate