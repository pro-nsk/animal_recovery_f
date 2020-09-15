import * as React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../api/api'
import '../css/common.css'
import AppProps from '../util/appProps'
import { isEnter, fetchOperationsCountHook } from '../util/util'

const CounterEdit = (props: AppProps) => {

    const counterOP = fetchOperationsCountHook()
    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(undefined)

    const edit = async () => {
        try {
            const success = await api.counterEdit(counter)
            success && props.history.push('/')
        } catch (error) {
            setError(error.error)
        }
    }

    useEffect(() => setCounter(counterOP), [counterOP])

    const handleCountChange = (e) => {
        setCounter(e.target.value)
    }

    return (
        <div className="form">
            {error && <div className="error">{error}</div>}
            <input placeholder="счётчик операций" value={counter} onChange={handleCountChange} onKeyPress={e => isEnter(e) && edit()} />
            <div className="pro-buttons">
                <div className="form-b-1" onClick={props.history.goBack}>Отмена</div>
                <div className="form-b-2" onClick={edit}>Сохранить</div>
            </div>
        </div>
    )
}

export default CounterEdit