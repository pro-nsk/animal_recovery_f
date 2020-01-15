import * as React from 'react'
import '../pages/style.css'
import {useContext} from 'react'
import {TopbarContext} from '../app'
import {Paragraphs, goToElementId} from '../util/util'

const TopBar = () => {

    const topbarContext = useContext(TopbarContext).topbar

    const getParagraphStyle = (id) => {
        return id == topbarContext ? 'p-h-span' : ''
    }

    return (
        <div id="top-bar" className="top-bar">
            <div id="menu">
                <span id="menu-logo" ><img src="/images/logo.jpg" /></span>
                <span id="menu-title" >
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-btn" htmlFor="menu-toggle">
                        <span id="menu-toggle-s" />
                    </label>
                    <div className="t">База Реабилитации Животных НСО&nbsp;Кольцово</div>
                    <div className="paragraphs">
                        <span className={getParagraphStyle(Paragraphs.about)} onClick={() => goToElementId('about-p-i')}>О Нас</span>
                        <span className={getParagraphStyle(Paragraphs.operations)} onClick={() => goToElementId('operations-p-i')}>Операционный День</span>
                        <span className={getParagraphStyle(Paragraphs.partners)} onClick={() => goToElementId('partners-p-i')}>Партнёры</span>
                        <span className={getParagraphStyle(Paragraphs.menuRequisites)} >Реквизиты</span>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default TopBar