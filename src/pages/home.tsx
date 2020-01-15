import * as React from 'react'
import {useContext, useEffect, useState} from 'react'
import {api} from '../api/api'
import {TopbarContext} from '../app'
import {Paragraphs, SITE_NAME} from '../util/util'
import './style.css'

const Home = () => {

    const topbarFunc = useContext(TopbarContext).func

    const [posts, setPosts] = useState([])
    const [rnd1, setRnd1] = useState(0)
    const [rnd2, setRnd2] = useState(0)

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const loadData = async () => {
        const posts = await api.getPhotos()
        setPosts(posts.photoset.photo)
        setRnd1(getRandomInt(0, posts.photoset.photo.length - 1))
        setRnd2(getRandomInt(0, posts.photoset.photo.length - 1))
    }

    useEffect(() => {
        document.title = SITE_NAME
        loadData()

        const about = document.getElementById('about-p-i')
        const partners = document.getElementById('partners-p-i')
        const operations = document.getElementById('operations-p-i')

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && entries[0].target === about) {
                topbarFunc(Paragraphs.about)
            } else if (entries[0].isIntersecting && entries[0].target === operations) {
                topbarFunc(Paragraphs.operations)
            } else if (entries[0].isIntersecting && entries[0].target === partners) {
                topbarFunc(Paragraphs.partners)
            } else {
                //
            }
        }, {threshold: [1]})

        about && observer.observe(about)
        partners && observer.observe(partners)
        operations && observer.observe(operations)

        return () => {
            about && observer.unobserve(about)
            partners && observer.unobserve(partners)
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
        return post?.url_l
    }

    return (
        <div className="feed-block">
            <div className="about-p-background" style={{backgroundImage: 'url(' + getPost(posts[rnd1]) + ')', opacity: posts.length == 0 ? 0 : 1}}></div>
            <div className="about-p">
                <div id="about-p-i">
                    <p>В 2013 году группой единомышленников была основана База реабилитации животных. База реабилитации - это уникальный для Новосибирска проект. Это настоящая больница для травмированных бездомных животных. Сюда поступают животные, которым нужна физическая и психологическая реабилитация. Любой человек, нашедший на улице города травмированное животное, может обратиться за помощью на Базу реабилитации. Здесь животное получит бесплатную медицинскую помощь, уход, содержание. Цель данного направления снизить стоимость ветеринарных услуг для бездомных животных.</p>
                    <p>В 2013 году у нас был только небольшой участок в СНТ и четкое видение того, как мы хотим сделать мир лучше. За эти годы была проведена огромная работа. Сейчас у нас есть корпус, специально спроектированный под нужны животных, современная операционная, отдельный дом для кошек и много чего еще. Но мы не хотим останавливаться на достигнутом! У нас есть амбициозный план по возведению второго корпуса с бассейном, чтобы обеспечить реабилитацию животным с повреждение апорно-двигательного аппарата. И проведению еще большего количества операций по контролю численности животных. Нам необходима Ваша поддержка, чтобы помогать еще большему количеству животных!</p>
                </div>
            </div>
            <div className="operations-p">
                <img src="/images/about.jpg" />
                <div id="operations-p-i">
                    <p>Сейчас мы активно развиваем направление по проведению потоковых операция по контролю численности животных. Бесплатно для бездомных животных и льготно для домашних. Наши хирурги ежемесячно проводят два операционных дня в наших стенах на волонтерских началах, чтобы жизнь в городе для животных и людей стала безопаснее. Мы также организуем выездные операционные дни в небольших населенных пунктах.</p>
                    <p>За 2019 год было проведено ??? количество операций по контролю численности, оказана помощь ??? животным, благодаря Базе реабилитации обрели хозяев ??? кошек и собак.</p>
                </div>
            </div>
            <div className="partners-p-background" style={{backgroundImage: 'url(' + getPost(posts[rnd2]) + ')', opacity: posts.length == 0 ? 0 : 1}}></div>
            <div className="partners-p">
                <div id="partners-p-i">
                    <p>Сейчас мы активно развиваем направление по проведению потоковых операция по контролю численности животных. Бесплатно для бездомных животных и льготно для домашних. Наши хирурги ежемесячно проводят два операционных дня в наших стенах на волонтерских началах, чтобы жизнь в городе для животных и людей стала безопаснее. Мы также организуем выездные операционные дни в небольших населенных пунктах.</p>
                    <p>За 2019 год было проведено ??? количество операций по контролю численности, оказана помощь ??? животным, благодаря Базе реабилитации обрели хозяев ??? кошек и собак.</p>
                </div>
            </div>
        </div>
    )
}

export default Home