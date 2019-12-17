import * as React from 'react'
import {Component} from 'react'
import {api} from '../api/api'
import '../pages/style.css'
import AppProps from '../util/appProps'

class TopBar extends Component<AppProps> {

    state = {
        menu: []
    }

    componentDidMount() {
        document.onclick = this.clickHandler
        document.ontouchstart = this.clickHandler
    }

    async loadMenu() {
        let menu = await api.menu()
        this.setState({menu})
    }

    clickHandler = e => {
        let menu = document.getElementById('menu-t')
        let list = document.getElementById('post-list')
        if (e.target == menu || e.target.parentElement == list) {
            if (list) {
                list.style.visibility = 'visible'
                list.style.opacity = '1'
            }
        } else {
            if (list) {
                list.style.visibility = 'hidden'
                list.style.opacity = '0'
            }
        }
    }

    render() {
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
                            <span id="about" >О Нас</span>
                            <span id="operations" >Операционный День</span>
                            <span id="partners" >Партнёры</span>
                            <span id="menu-requisites" >Реквизиты</span>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default TopBar