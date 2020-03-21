import * as React from 'react'
import {useContext, useEffect, useState, Suspense} from 'react'
import {Paragraphs, SITE_NAME, goToElementId} from '../util/util'
import './style.css'
import './../css/common.css'
import {TopbarContext} from '../components/contextProvider'

const UserCarousel = React.lazy(() => import('../components/userCarousel'))

const Home = () => {

    const topbarFunc = useContext(TopbarContext).func
    const {posts} = useContext(TopbarContext)

    const [rnd1, setRnd1] = useState(0)
    const [rnd2, setRnd2] = useState(0)
    const [rnd3, setRnd3] = useState(0)

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const prepareFeed = () => {
        setRnd1(getRandomInt(0, posts.length - 1))
        setRnd2(getRandomInt(0, posts.length - 1))
        setRnd3(getRandomInt(0, posts.length - 1))
    }

    useEffect(() => {
        document.title = SITE_NAME
        prepareFeed()

        const pre = document.getElementById('pre-p-i')
        const about = document.getElementById('about-p-i')
        const partners = document.getElementById('partners-p-i')
        const operations = document.getElementById('operations-p-i')
        const menuRequisites = document.getElementById('menu-requisites-p-i')

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && entries[0].target === pre) {
                topbarFunc(Paragraphs.pre)
            } else if (entries[0].isIntersecting && entries[0].target === about) {
                topbarFunc(Paragraphs.about)
            } else if (entries[0].isIntersecting && entries[0].target === operations) {
                topbarFunc(Paragraphs.operations)
            } else if (entries[0].isIntersecting && entries[0].target === partners) {
                topbarFunc(Paragraphs.partners)
            } else if (entries[0].isIntersecting && entries[0].target === menuRequisites) {
                topbarFunc(Paragraphs.menuRequisites)
                console.log(5)
            } else {
                //
            }
        }, {threshold: [1]})

        pre && observer.observe(pre)
        about && observer.observe(about)
        partners && observer.observe(partners)
        operations && observer.observe(operations)
        menuRequisites && observer.observe(menuRequisites)

        return () => {
            pre && observer.unobserve(pre)
            about && observer.unobserve(about)
            partners && observer.unobserve(partners)
            operations && observer.unobserve(operations)
            menuRequisites && observer.unobserve(menuRequisites)
        }
    }, [])

    const activator = (e: any) => {
        e.currentTarget.parentElement.lastChild.classList.toggle('active')
        e.currentTarget.lastChild.classList.toggle('active')
    }

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
            <div className="pre-p-background" style={{backgroundImage: 'url(' + getPost(posts[rnd1]) + ')', opacity: posts.length == 0 ? 0 : 1}}></div>
            <div className="pre-p">
                <div id="pre-p-i">
                    <p className="a-blue">МЫ ДЕЙСТВУЕМ ТОЛЬКО В ИНТЕРЕСАХ&nbsp;ЖИВОТНЫХ</p>
                    <p className="a-red">Мы уникальный проект для России по стерилизации и оказанию ветеринарной помощи для бездомных животных на безвозмездной основе.</p>
                    <button className="a-button" onClick={() => goToElementId('menu-requisites-p-i')}>Помочь!</button>
                    <p className="pre-p-down"><img className="arrow-more" src="/images/arrow_down.svg" onClick={() => goToElementId('about-p-i')} /></p>
                </div>
            </div>
            <div className="about-p">
                <div id="about-p-i">
                    <Suspense fallback="">
                        <UserCarousel />
                    </Suspense>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>История базы</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <p>В 2013 году группой единомышленников была основана База реабилитации животных. Руководителем этого сложного и важного для города места стала Батуева Анастасия. База реабилитации - это уникальный для Сибири проект. Это настоящая больница для  бездомных животных, попавших в трудную ситуацию. Сюда поступают животные, которым нужна физическая и психологическая реабилитация.</p>
                            <p>К нам за помощью обращаются приюты, кураторы и просто люди, которые не смогли пройти мимо страданий бездомного животного. Здесь собаки и кошки в режиме стационара  получают бесплатный  уход, заботу, содержание и питание. Цель данного проекта -  снизить затраты на ветеринарные услуги для бездомных животных.</p>
                            <p>Сейчас мы активно развиваем направление по проведению потоковых Операций по Контролю Численности (ОКЧ) животных (стерилизация/кастрация). Руководитель данного направления Полякова Екатерина. Абсолютный фанат своего дела и вечный энерджайзер. Очень важный аспект проекта - бездомные животные оперируются на безвозмездной основе, домашние льготно. В проведении операций используются высококачественный шовный материал и наркоз последнего поколения, ведь и без того настрадавшиеся бездомные животные достойны высокого ветобслуживания. Это самые настоящие потоковые операции, реализуемые ведущими врачами Сети ветеринарных клиник &quot;ИнТерра&quot; и команды волонтеров Базы. Сам процесс операций проходит в специально оборудованной операционной на Базе, где есть все необходимое для работы ветеринарных хирургов. Также мы организуем выездные операционные дни в области. Такие операции снижают численность бездомных животных на улицах нашего города, снижают проявления агрессивного поведения, улучшают качество жизни братьев наших меньших и нас горожан.</p>
                            <p>С января 2019 года по февраль 2020 года было проведено 934 операции по контролю численности животных, оказана реабилитация  более 700 животным. Благодаря команде  Базы реабилитации животных обрели хозяев почти 130 кошек и собак.</p>
                            <p>Проект создавался на голом энтузиазме небольшой группы людей. Без какой-либо помощи со стороны государства, и сейчас существует исключительно благодаря поддержке благотворителей и неравнодушных людей. Стоит отметить, что База реабилитации прошла аккредитацию компании MARS, одного из ключевых партнёров.</p>
                            <p>В своей работе мы часто сталкиваемся со сложными случаями: Гуня - пёс без верхней челюсти, Густав - кот, которому живодеры отрезали задние ноги и хвост и выкинули в мусорный бак. Айк - пёс, которого специально несколько раз переехали на квадроцикле, переломав ему практически все кости. Свит - пёс, которому хозяева отрубили задние лапы, после чего повесили, но Свит выжил и еще долго скитался возле места, где когда-то жил.  Валли, которому хозяева наркоманы нанесли пять ножевых ранений и он также вернулся к своему дому. Жан - ретвейлер, которого долгое время держали на метровой цепи с вросшим шипами в тело строгим ошейником, не давая еды и воды. За последнее время нам удалось с помощью энтерального питания выкормить трёх собак, находящихся в крайней стадии истощения.</p>
                            <p>Эти животные находились на краю гибели, но благодаря нашему проекту и неравнодушным людям получили ещё один шанс на полноценную жизнь и любящих хозяев.</p>
                            <p>В 2013 году у нас был только небольшой участок, не было электричества, воды, забора, но было ясное видение того, как мы хотим сделать мир лучше.  За эти годы была проведена огромная работа. Сейчас на Базе есть правильно спланированный корпус с двумя отделениями стационарного содержания, сердце Базы - оснащённая по высоким стандартам операционная, процедурная, прачечная, душевая для животных. Но мы не готовы  останавливаться на достигнутом! Мы нацелены на проведение еще бОльшего количества операций по контролю численности животных и оказания помощи еще бОльшему количеству травмированных животных. Все этапы становления проекта, формирование команды волонтеров доказывают, что такое место необходимо для города, для области, для страны.</p>
                            <p>Деятельность Базы реабилитации направлена в том числе на безопасность горожан, посредством сокращения численности бездомных животных единственным гуманным способом - проведением Операции по Контролю Численности (ОКЧ). </p>
                            <p>Нам необходима Ваша поддержка, чтобы сделать наш город чистым, уютным и ещё более достойным!</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Документы</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <ul>
                                <li><a href="/doc/galbshtadt.pdf">Письмо поддержки от администрации гальбштадского сельсовета</a></li>
                                <li><a href="/doc/ident.pdf">Письмо поддержки от центра имплантологии &quot;Ай-Дент&quot;</a></li>
                                <li><a href="/doc/kaleidoskop.pdf">Письмо поддержки от МКУ МЦ Калейдоскоп</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Наши проекты</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <ul>
                                <li>Участие в форуме «Экологичный Новосибирск».</li>
                                <li>Участие в эко-мероприятиях Новосибирска.</li>
                                <li>Волонтерская деятельность компаний -партнеров.</li>
                                <li>Благотворительный проект в пользу Базы Реабилитации на платформе PLANETA.RU</li>
                                <li>Гостевой проект «Выходные на Базе».</li>
                                <li>Проект «Уроки доброты».</li>
                                <li>Проект «Особенные гости».</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Новости и статьи</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <p>text</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Животные ищут дом</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <p>text</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Пресса о нас</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <p>text</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners-p-background" style={{backgroundImage: 'url(' + getPost(posts[rnd2]) + ')', opacity: posts.length == 0 ? 0 : 1}}></div>
            <div className="partners-p">
                <div id="partners-p-i">
                    <div><img src="/images/interra.png" />ИнТерра</div>
                    <div><img src="/images/bublik.png" />Бублик Shop</div>
                    <div><img src="/images/mars.png" />Mars</div>
                    <div><img src="/images/valta.png" />Валта Пед Продактс</div>
                    <div><img src="/images/triol.png" />Триол</div>
                    <div><img src="/images/royal.svg" />Роял Канин</div>
                    {/* <div><img src="/images/bublik.png" />МонтажБРО</div> */}
                    <div><img src="/images/prospect.png" />Проспект</div>
                    {/* <div><img src="/images/bublik.png" />Трейд</div> */}
                    <div><img src="/images/global.png" />Глобал Вет</div>
                    <div><img src="/images/ident.svg" />iDent</div>
                    <div><img src="/images/sms.png" />СмсФинанс</div>
                    <div><img src="/images/xarakiri.png" />Харакири</div>
                    <div><img src="/images/pmi.svg" />Филип Моррис</div>
                    <div><img src="/images/lerua.svg" />Леруа Мерлен</div>
                    <div><img src="/images/gavgav.png" />Гав-Гав Маркет</div>
                    <div><img src="/images/bour.png" />Кинологический центр Боюр</div>
                    <div><img src="/images/petlandia.png" />Петландия</div>
                    <div><img src="/images/sportstyle.png" />Спортстайл</div>
                    <div><img src="/images/tion.svg" />Тион</div>
                </div>
            </div>
            <div className="operations-p">
                <div className="op-counter fw500">С января 2019 года было проведено<img src="/images/operations.jpg" />операции по контролю численности животных</div>
                <div id="operations-p-i">
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Польза стерилизации</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <ul>
                                <li>Контроль численности популяции животных. Фраза &quot;не хочешь видеть на улице бездомных - стерилизуй домашних&quot; не теряет своей актуальности. На данный момент в городах России животных, нуждающихся в доме гораздо больше, чем людей готовых их взять к себе.</li>
                                <li>Увеличение продолжительности жизни животного и улучшение ее качества. После стерилизации у животных выравнивается гормональный фон, они не испытывают стресс во время течки и гона. Кошки не испытывают болевых ощущений во время течки и спаривания. Роды и кормление не изнашивают организм животного, а значит продолжительность жизни увеличивается.</li>
                                <li>Устранение некоторых поведенческих проблем. Такие проблемы как агрессивное поведение, метки и побеги часто встречается у животных во время течки и гона. Их легко решить раз и навсегда с помощью стерилизации.</li>
                                <li>Отсутствует риск развития заболеваний передающихся половым путем. Отсутствие половых контактов обеспечивает животному что процентную защищенность от многих неприятных заболеваний передающихся новым путем.</li>
                                <li>Снижается вероятность развития заболеваний мочеполовой сферы. У стерилизованных сук и кошек снижает вероятность возникновения опухолей матки и яичников, рака молочной железы.</li>
                                <li>У кастрированных кобелей и котов снижается вероятность заболевания раком предстательной железы и снижает количество случаев возникновения болезней простаты.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Плюсы стерилизации на Базе</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <ul>
                                <li>Ведущие дипломированные хирурги с большим опытом работы.</li>
                                <li>Выосококачественный наркоз.</li>
                                <li>Саморассасывающийся шовный материал последнего поколения.</li>
                                <li>Современная операционная.</li>
                                <li>Бесплатные операции для бездомных животных и льготные для домашних.</li>
                                <li>Соблюдение норм стерильности.</li>
                                <li>Использование стерильных инструментов и расходных материалов.</li>
                                <li>Использование индивидуальных наборов инструментов для каждого животного.</li>
                                <li>При проведении операции наш хирург делает максимально маленький разрез, что является менее травматичным для животного, способствует быстрому заживлению после операции и является профилактикой грыж.</li>
                                <li>После операции накладывается косметический внутрикожный саморассасывающийся шов, который имеет эстетичный вид и после заживления почти незаметен. Такой шов способствует быстрому заживлению тканей.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Запись на операцию по контролю численности</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <p>text</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Предоперационная подготовка</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <p>И нформация о ПОДГОТОВКЕ К ОПЕРАЦИИ по контролю  численности животных.</p>
                            <p>Напомним, данный вид операции – полостная операция, во время проведения которой у самок убирают матку и яичники, а у самцов семенники. Операция проводится под полным глубоким наркозом.</p>
                            <p>Перед операцией животное должно быть осмотрено у ветеринарного врача, как минимум УЗИ сердца сделать необходимо. Но даже при этом мы не исключаем рисков, связанных с оперативным вмешательством.</p>
                            <p>За 6 часов до операции животное не кормить, за 1-2 часа не поить, это важно!</p>
                            <p>Кошек приносить в переносках, собак обязательно на поводке и в наморднике.</p>
                            <p>Сразу после операции на кошку или собаку необходимо одеть попону послеоперационную (приобрести её можно в любой ветклинике), предотвращающую разлизывание швов. На котов и кобелей одеваем воротник (продается в зоомагазинах или можно изготовить самим из пластмассового ведра, удалив дно и сделав отверстия рядом с днищем). Воротник должен быть по размеру, то есть его длина  должна быть такой, чтобы нос собаки был «утоплен» внутри него на 10-15 см.</p>
                            <p>Животное в наркозе после операции располагается в тихом, темном , теплом месте без сквозняков.</p>
                            <p>Время выхода из наркоза индивидуально и зависит от физиологических особенностей, возраста, сопутствующих и скрытых заболеваний.</p>
                            <p>!!!Убедительная просьба, самолечением не заниматься!!!</p>
                            <p>После выхода из наркоза, время выхода составляет 12-24 часа, можно предложить еду, сначала жидкую, а со следующего дня можно кормить привычной пищей, но обязательно следить, чтобы животное регулярно испражнялось.</p>
                            <p>Через сутки после операции начать обработку швов. Сначала шов смочить водным раствором Хлоргексидина, смыть ватным тампоном загрязнения и засохшую сукровицу из разреза, затем просушить шов и повторять процедуру до полного заживления.</p>
                            <p>Здоровья вам и вашим питомцам!</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-button" onClick={activator}>
                            <span>Нужды базы</span>
                            <img className="accordion-arrow" src="/images/dropdown-arrow.svg" />
                        </div>
                        <div className="accordion-content">
                            <p>text</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-requisites-p-background" style={{backgroundImage: 'url(' + getPost(posts[rnd3]) + ')', opacity: posts.length == 0 ? 0 : 1}}></div>
            <div className="menu-requisites-p">
                <div id="menu-requisites-p-i">
                    <p>НРОО по оказанию помощи животным &quot;База реабилитации животных&quot; ИНН 5408023500</p>
                    <p>Реквизиты для финансовой помощи:</p>
                    <p>1. Сбербанк <span className="fw500">4817 7601 2741 6992</span></p>
                    <p>2. Альфа-Банк <span className="fw500">5486 7320 5501 7396</span></p>
                    <p>Обе карты привязаны к тел. 8-913-909-96-90 на имя Батуевой Анастасии Петровны.</p>
                    <p>3. Яндекс Кошелёк <span className="fw500">410017369837366</span></p>
                    <p>4. PayPal <a href="https://www.paypal.me/AnimalRecovery54">www.paypal.me/AnimalRecovery54</a></p>
                    <p>Спасибо, что вы с нами!</p>
                </div>
            </div>
        </div>
    )
}

export default Home