import * as React from 'react'
import { useEffect } from 'react'
import { api } from '../api/api'
import AppProps from '../util/appProps'
import Loading from './loading'

const Logout = (props: AppProps) => {

    const logout = async () => {
        await api.logout()
        props.history.push('/')
    }

    useEffect(() => { logout() }, [])

    return <Loading/>
}

export default Logout