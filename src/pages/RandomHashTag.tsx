import * as React from 'react'
import { useState } from 'react'
import '../css/common.css'
import AppProps from '../util/appProps'
import { isEnter } from '../util/util'

const RandomHashTag = (props: AppProps) => {

    const [hashTags, setHashTags] = useState<string>('')

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
        const tagArray = hashTags.split(' ')
        shuffle(tagArray)
        setHashTags(tagArray.join(' '))
    }

    const handleTextChange = e => setHashTags(e.target.value)

    return (
        <div className="form">
            <textarea placeholder="введите набор хештегов разделённых пробелом" value={hashTags} onChange={handleTextChange} onKeyPress={e => isEnter(e) && random()} />
            <div className="pro-buttons">
                <div className="form-b-1" >Не нажимай</div>
                <div className="form-b-2" onClick={random}>Перемешать</div>
            </div>
        </div>
    )
}

export default RandomHashTag