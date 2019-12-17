import * as React from 'react'
import {useEffect, useState} from 'react'
import {api} from '../api/api'
import TopBar from '../components/menu'
import {SITE_NAME} from '../util/util'
import Loading from './loading'
import './style.css'
import Footer from '../components/footer'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [ready, setReady] = useState(true)

    const loadData = async () => {
        let posts = await api.getPhotos()
        let ready = true
        setPosts(posts.photoset.photo)
        setReady(ready)
    }

    useEffect(() => {
        document.title = SITE_NAME
        loadData()

        let about = document.getElementById('about-p-i')
        let operations = document.getElementById('operations-p-i')

        let observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && entries[0].target === about) {
                console.log(1)
                // setTopbarColor(TOPBAR_COLOR_AQUA)
            } else if (entries[0].isIntersecting && entries[0].target === operations) {
                console.log(2)
                // setTopbarColor(TOPBAR_COLOR_RED)
            } else {
                // setTopbarColor(TOPBAR_COLOR_ACCENT)
            }
        }, {threshold: [1]})

        about && observer.observe(about)
        operations && observer.observe(operations)

        return () => {
            about && observer.unobserve(about)
            operations && observer.unobserve(operations)
        }


    }, [])



    // resetHome() {
    //     this.loadPage(0)
    //     backToTop()
    // }

    // isFirst() {
    //     return this.state.pageNumber == 0
    // }

    // isLast() {
    //     return this.state.posts.length < PAGE_SIZE
    // }

    // loadPage(pageNumber: number) {
    //     this.setState({pageNumber, ready: false}, () => this.loadData())
    // }

    // deletePost = async (id) => {
    //     let ok = await api.delete(id)
    //     ok && this.loadData()
    // }

    const getPost = (post) => {
        return post ? post.url_l : ''
    }

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }



    return ready ? (
        <div className="home">
            <TopBar />
            <div className="feed-block">
                <div className="about-p-background" style={{backgroundImage: 'url(' + getPost(posts[getRandomInt(0, posts.length - 1)]) + ')', opacity: posts.length == 0 ? 0 : 1}}></div>
                <div id="about-p-i" className="about-p">
                    <div>
                        <p>В 2013 году группой единомышленников была основана База реабилитации животных. База реабилитации - это уникальный для Новосибирска проект. Это настоящая больница для травмированных бездомных животных. Сюда поступают животные, которым нужна физическая и психологическая реабилитация. юбой человек, нашедший на улице города травмированное животное, может обратиться за помощью на Базу реабилитации. Здесь животное получит бесплатную медицинскую помощь, уход, содержание. Цель данного направления снизить стоимость ветеринарных услуг для бездомных животных.</p>
                        <p>В 2013 году у нас был только небольшой участок в СНТ и четкое видение того, как мы хотим сделать мир лучше. За эти годы была проведена огромная работа. Сейчас у нас есть корпус, специально спроектированный под нужны животных, современная операционная, отдельный дом для кошек и много чего еще. Но мы не хотим останавливаться на достигнутом! У нас есть амбициозный план по возведению второго корпуса с бассейном, чтобы обеспечить реабилитацию животным с повреждение апорно-двигательного аппарата. И проведению еще большего количества операций по контролю численности животных. Нам необходима Ваша поддержка, чтобы помогать еще большему количеству животных!</p>
                    </div>
                </div>
                <div id="operations-p-i" className="operations-p">
                    <img src="/images/about.jpg"/>
                    <div>
                        <p>Сейчас мы активно развиваем направление по проведению потоковых операция по контролю численности животных. Бесплатно для бездомных животных и льготно для домашних. Наши хирурги ежемесячно проводят два операционных дня в наших стенах на волонтерских началах, чтобы жизнь в городе для животных и людей стала безопаснее. Мы также организуем выездные операционные дни в небольших населенных пунктах.</p>
                        <p>За 2019 год было проведено ??? количество операций по контролю численности, оказана помощь ??? животным, благодаря Базе реабилитации обрели хозяев ??? кошек и собак.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) : <Loading />

}

export default Posts