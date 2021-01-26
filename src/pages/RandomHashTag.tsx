import * as React from 'react'
import { useEffect, useState } from 'react'
import '../css/common.css'
import { StorageKey } from '../util/storage'
import { isEnter } from '../util/util'

const RandomHashTag = () => {

    const [hashTag, setHashTag] = useState<string>('')

    useEffect(() => {
        document.title = 'Волшебный Рандомайзер'
        const hashTag = localStorage.getItem(StorageKey.HashTagString)
        hashTag && setHashTag(hashTag)
    }, [])

    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            // And swap it with the current element.
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }

        return array
    }

    const random = () => {
        const hashTagArray = hashTag.split(' ')
        shuffle(hashTagArray)
        const hashTagShuffled = hashTagArray.join(' ')
        setHashTag(hashTagShuffled)
        localStorage.setItem(StorageKey.HashTagString, hashTagShuffled)
    }

    const handleTextChange = e => setHashTag(e.target.value)

    return (
        <div className="form">
            <textarea placeholder="введите набор хештегов разделённых пробелом" value={hashTag} onChange={handleTextChange} onKeyPress={e => isEnter(e) && random()} />
            <div className="pro-buttons">
                <div className="form-b-1" >Не нажимай</div>
                <div className="form-b-2" onClick={random}>Перемешать</div>
            </div>
        </div>
    )
}

export default RandomHashTag