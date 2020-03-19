import * as React from 'react'
import {createContext, useState} from 'react'
import {Paragraphs} from '../util/util'

export const TopbarContext = createContext({
    topbar: Paragraphs.about,
    func: id => console.log(id),
    readyFunc: ready => console.log(ready),
    posts: [],
    setPosts: posts => console.log(posts),
})

// interface ContextProps {
//     readyFunc: (boolean) => void
// }

const ContextProvider = (props: any) => {

    const [paragraphId, setParagraphId] = useState(Paragraphs.pre)
    const [posts, setPosts] = useState([])

    return <TopbarContext.Provider value={{
        topbar: paragraphId,
        func: id => setParagraphId(id),
        readyFunc: props.readyFunc,
        posts,
        setPosts
    }}>{props.children}</TopbarContext.Provider>
}

export default ContextProvider