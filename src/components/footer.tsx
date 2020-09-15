import * as React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'
import '../css/main.css'
import { isAuthenticated } from '../util/util'

const Footer = () => {
    const auth = isAuthenticated()
    return (
        <div className="footer">
            <span className="phone">
                <p><span className="fw500">+7 (913) 909 96-90 - Батуева Анастасия</span>, руководитель&nbsp;базы&nbsp;реабилитации</p>
                <p><span className="fw500">+7 (989) 321 49-57 - Полякова Екатерина</span>, организатор&nbsp;операционного&nbsp;дня</p>
                <p><span className="fw500">+7 (913) 849 98-81 - Емельянова Екатерина</span>, сотрудничество&nbsp;и&nbsp;связи&nbsp;с&nbsp;общественностью</p>
                <p><span className="fw500">+7 (909) 533 38-78 - Скрипилина Ксения</span>, запись&nbsp;на&nbsp;стерилизацию</p>
            </span>
            <span className="links">
                <p><a href="mailto:animalrecovery54@gmail.com">animalrecovery54@gmail.com</a></p>
                <p className="social">
                    <a className="in" href="https://www.instagram.com/animal_recovery54/" /><span className="in-before" />
                    <a className="fb" href="https://www.facebook.com/groups/265910850673111/" /><span className="fb-before" />
                    <a className="vk" href="https://vk.com/animal_recovery54" /><span className="vk-before" />
                </p>
                <p className="fs12"><a href="https://pro.nsk.ru">разработка сайта</a></p>
                <p className="fs12">{auth ? <Link to="/logout">выход</Link> : <Link to="/login">вход</Link>}</p>
            </span>
        </div>
    )
}

export default Footer