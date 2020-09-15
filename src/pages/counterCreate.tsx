import * as React from 'react'
import { useState } from 'react'
import { api } from '../api/api'
import '../css/common.css'
import AppProps from '../util/appProps'
import { isEnter } from '../util/util'

const CounterCreate = (props: AppProps) => {

    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(undefined)

    const create = async () => {
        try {
            const success = await api.counterCreate(counter)
            success && props.history.push('/')
        } catch (error) {
            setError(error.error)
        }
    }

    const handleCountChange = (e) => {
        setCounter(e.target.value)
    }

    return (
        <div className="form">
            {error && <div className="error">{error}</div>}
            <input placeholder="счётчик операций" value={counter} onChange={handleCountChange} onKeyPress={e => isEnter(e) && create()} />
            <div className="pro-buttons">
                <div className="form-b-1" onClick={props.history.goBack}>Отмена</div>
                <div className="form-b-2" onClick={create}>Сохранить</div>
            </div>
        </div>
    )
}

export default CounterCreate