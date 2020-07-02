import * as React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../css/carousel.css'

const partners = [
    {
        id: 1,
        pic1: '/images/interra.png', name1: 'ИнТерра',
        pic2: '/images/bublik.png', name2: 'Бублик Shop',
        pic3: '/images/mars.png', name3: 'Mars',
        pic4: '/images/valta.png', name4: 'Валта Пед Продактс',
        pic5: '/images/triol.png', name5: 'Триол',
        pic6: '/images/royal.svg', name6: 'Роял Канин',
        pic7: '/images/prospect.png', name7: 'Проспект',
        pic8: '/images/pgrants_logo_gp-vertical.png', name8: 'Фонд президентских грантов',
        pic9: '/images/ident.svg', name9: 'iDent',
        pic10: '/images/sms.png', name10: 'СмсФинанс',
        pic11: '/images/xarakiri.png', name11: 'Харакири',
        pic12: '/images/pmi.svg', name12: 'Филип Моррис',
        pic13: '/images/lerua.svg', name13: 'Леруа Мерлен',
        pic14: '/images/gavgav.png', name14: 'Гав-Гав Маркет',
        pic15: '/images/bour.png', name15: 'Кинологический центр Боюр'
    },
    {
        id: 2,
        pic1: '/images/petlandia.png', name1: 'Петландия',
        pic2: '/images/sportstyle.png', name2: 'Спортстайл',
        pic3: '/images/tion.svg', name3: 'Тион',
        pic4: '/images/nemec.gif', name4: 'Администрация Гальбштадта',
        pic5: '/images/kaleidoskop.png', name5: 'Калейдоскоп',
        pic6: '/images/global.png', name6: 'Глобал Вет'
    },
]

const handleOnDragStart = (e) => e.preventDefault()

const renderPartnersList = () => {
    return (
        partners.map(partner =>
            <div onDragStart={handleOnDragStart} className="partners-logos" key={partner.id}>
                <div><img src={partner.pic1} />{partner.name1}</div>
                <div><img src={partner.pic2} />{partner.name2}</div>
                <div><img src={partner.pic3} />{partner.name3}</div>
                <div><img src={partner.pic4} />{partner.name4}</div>
                <div><img src={partner.pic5} />{partner.name5}</div>
                <div><img src={partner.pic6} />{partner.name6}</div>
                <div><img src={partner.pic7} />{partner.name7}</div>
                <div><img src={partner.pic8} />{partner.name8}</div>
                <div><img src={partner.pic9} />{partner.name9}</div>
                <div><img src={partner.pic10} />{partner.name10}</div>
                <div><img src={partner.pic11} />{partner.name11}</div>
                <div><img src={partner.pic12} />{partner.name12}</div>
                <div><img src={partner.pic13} />{partner.name13}</div>
                <div><img src={partner.pic14} />{partner.name14}</div>
                <div><img src={partner.pic15} />{partner.name15}</div>
            </div>
        )
    )
}

const PartnersCarousel = () => (
    <AliceCarousel
        mouseTrackingEnabled
        buttonsDisabled
        items={renderPartnersList()}
        // responsive={{
        //     0: {
        //         items: 1,
        //     },
        //     501: {
        //         items: 3
        //     },
        //     1001: {
        //         items: 5
        //     }
        // }}
    />
)

export default PartnersCarousel