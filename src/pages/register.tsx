import * as React from 'react'
import { useState } from 'react'
import { api } from '../api/api'
import '../css/common.css'
import AppProps from '../util/appProps'
import { isEnter } from '../util/util'

const Register = (props: AppProps) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [error, setError] = useState(undefined)

    const register = async () => {
        try {
            const success = await api.register(email, pass, passConfirm)
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

    const handleConfirmChange = (e) => {
        setPassConfirm(e.target.value)
    }

    return (
        <div className="form">
            {error && <div className="error">{error}</div>}
            <input placeholder="электронная почта" type="email" onChange={handleEmailChange} onKeyPress={e => isEnter(e) && register()} />
            <input placeholder="пароль" type="password" onChange={handlePassChange} onKeyPress={e => isEnter(e) && register()} />
            <input placeholder="повторите пароль" type="password" onChange={handleConfirmChange} onKeyPress={e => isEnter(e) && register()} />
            <div className="pro-buttons">
                <div className="form-b-1" onClick={props.history.goBack}>Отмена</div>
                <div className="form-b-2" onClick={register}>Регистрация</div>
            </div>
        </div>
    )
}

export default Register