import * as React from 'react'
import {useEffect, useContext} from 'react'
import {api} from '../api/api'
import {TopbarContext} from '../components/contextProvider'

const Loading = () => {

    const {setPosts, readyFunc} = useContext(TopbarContext)

    const loadData = async () => {
        try {
            const posts = await api.getPhotos()
            setPosts(posts.photoset.photo)
        } catch (error) {
            setPosts([])
        }
        
        readyFunc(true)
    }

    useEffect(() => {
        loadData()
    },[])

    return (
        <div className='loading'>
            <img src={'/images/logo_small.png'} id="logo-animate" />
        </div>
    )
}

export default Loading