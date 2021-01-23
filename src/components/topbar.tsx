import * as React from 'react'
import { useContext, useEffect } from 'react'
import '../css/main.css'
import AppProps from '../util/appProps'
import { goToElementId, Paragraphs } from '../util/util'
import { TopbarContext } from './contextProvider'

const TopBar = (props: AppProps) => {

    const topbarContext = useContext(TopbarContext).topbar

    const getParagraphStyle = (id) => {
        return id == topbarContext ? 'p-h-span' : ''
    }

    const handleClick = (e) => {
        const menuButton: any = document.getElementById('menu-toggle')
        const menuButtonS: any = document.getElementById('menu-toggle-s')
        if (e.target != menuButton && e.target != menuButtonS) {
            menuButton.checked = false
        }
    }

    useEffect(() => {
        document.onclick = handleClick
    }, [])

    const scrollToHome = () => {
        if (props.location.pathname != '/') {
            props.history.push('/')
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
    }

    return (
        <div id="top-bar" className="top-bar">
            <div id="menu">
                <span id="menu-logo" ><img onClick={scrollToHome} src="/images/logo_blue.png" /></span>
                <span id="menu-title" >
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-btn" htmlFor="menu-toggle">
                        <span id="menu-toggle-s" />
                    </label>
                    <div className="t">База Реабилитации Животных НСО&nbsp;Кольцово</div>
                    <div className="paragraphs">
                        <span className={getParagraphStyle(Paragraphs.about)} onClick={() => goToElementId('about-p-i')}>О Нас</span>
                        <span className={getParagraphStyle(Paragraphs.partners)} onClick={() => goToElementId('partners-p-i')}>Партнёры</span>
                        <span className={getParagraphStyle(Paragraphs.operations)} onClick={() => goToElementId('operations-p-i')}>Операционные дни</span>
                        <span className={getParagraphStyle(Paragraphs.menuRequisites)} onClick={() => goToElementId('menu-requisites-p-i')} >Реквизиты</span>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default TopBar