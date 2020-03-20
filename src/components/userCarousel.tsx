import * as React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../css/carousel.css'

const users = [
    {id: 1, pic: '/images/1.jpg', from: 'сентября 2013', name: 'Батуева Анастасия Петровна', status: 'Основатель и руководитель Базы реабилитации'},
    {id: 2, pic: '/images/2.jpg', from: 'сентября 2013', name: 'Полякова Екатерина Юриевна', status: 'Ораганизатор операционного дня. Запись на операцию по контролю численности'},
    {id: 3, pic: '/images/3.jpg', from: 'апреля 2018', name: 'Емельянова Екатерина Викторовна', status: 'Дежурная. Главный редактор'},
    {id: 4, pic: '/images/4.jpg', from: 'ноября 2019', name: 'Власова Татьяна Алексеевна', status: 'Волонтёр'},
    {id: 5, pic: '/images/5.jpg', from: 'января 2019', name: 'Родионова Анна Сергеевна', status: 'Дежурная. Главная по пиару'},
    {id: 6, pic: '/images/6.jpg', from: 'декабря 2018', name: 'Богданова Ксения Владимировна', status: 'Дежурная. Редактор. Фотограф'},
    {id: 7, pic: '/images/7.jpg', from: 'сентября 2013', name: 'Дмитриева Наталья Валерьевна', status: 'Дежурная'},
    {id: 8, pic: '/images/8.png', from: 'января 2019', name: 'Зеленина Наталья Валерьевна', status: 'Волонтёр. Запись на операцию по контролю численности'},
    {id: 9, pic: '/images/9.jpg', from: 'января 2019', name: 'Джавадова Азиза Аятдиновна', status: 'Волонтёр'},
    {id: 10, pic: '/images/10.jpg', from: 'января 2019', name: 'Вырва Кристана Алексеевна', status: 'Дежурная'},
    {id: 11, pic: '/images/11.jpg', from: 'марта 2019', name: 'Скрипилина Ксения Сергеевна', status: 'Волонтёр. Запись на операцию по контролю численности'}
    
]

const handleOnDragStart = (e) => e.preventDefault()

const renderUserList = () => {
    return (
        users.map(user =>
            <div onDragStart={handleOnDragStart} className="user-profile" key={user.id}>
                <img src={user.pic}></img>
                <p className="user-name fw500">{user.name}</p>
                <p>В команде с {user.from}</p>
                <p>{user.status}</p>
            </div>
        )
    )
}

const UserCarousel = () => (
    <AliceCarousel
        mouseTrackingEnabled
        buttonsDisabled
        items={renderUserList()}
        responsive={{
            0: {
                items: 1,
            },
            501: {
                items: 3
            },
            1001: {
                items: 5
            }
        }}
    />
)

export default UserCarousel