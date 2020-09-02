import * as React from 'react'
import { useState } from 'react'
import { api } from '../api/api'
import '../css/common.css'
import AppProps from '../util/appProps'
import { isEnter } from '../util/util'

const Login = (props: AppProps) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(undefined)

    const login = async () => {
        try {
            const success = await api.login(email, pass)
            success && props.history.push('/')
        } catch (error) {
            setError(error.error)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    return (
        <div className="form">
            {error && <div className="error">{error}</div>}
            <input placeholder="электронная почта" type="email" onChange={handleEmailChange} onKeyPress={e => isEnter(e) && login()} />
            <input placeholder="пароль" type="password" onChange={handlePassChange} onKeyPress={e => isEnter(e) && login()} />
            <div className="pro-buttons">
                <div className="form-b-1" onClick={props.history.goBack}>Отмена</div>
                <div className="form-b-2" onClick={login}>Вход</div>
            </div>
        </div>
    )
}

export default Login