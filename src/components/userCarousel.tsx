import * as React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../css/carousel.css'

const users = [
    {id: 1, name: 'Батуева Анастасия Петровна', status: 'Основатель и руководитель Базы реабилитации'},
    {id: 2, name: 'Полякова Екатерина Юриевна', status: 'Ораганизатор операционного дня. Запись на операцию по контролю численности'},
    {id: 3, name: 'Емельянова Екатерина Викторовна', status: 'Дежурная. Главный редактор'},
    {id: 4, name: 'Власова Татьяна Алексеевна', status: 'Волонтёр'},
    {id: 5, name: 'Родионова Анна Сергеевна', status: 'Дежурная. Главная по пиару'},
    {id: 6, name: 'Дмитриева Наталья Валерьевна', status: 'Дежурная'},
    {id: 7, name: 'Зеленина Наталья Валерьевна', status: 'Волонтёр. Запись на операцию по контролю численности'},
    {id: 8, name: 'Джавадова Азиза Аятдиновна', status: 'Волонтёр'},
    {id: 9, name: 'Вырва Кристана Алексеевна', status: 'Дежурная'},
    {id: 10, name: 'Скрипилина Ксения Сергеевна', status: 'Волонтёр. Запись на операцию по контролю численности'},
    {id: 11, name: 'Богданова Ксения Владимировна', status: 'Дежурная. Редактор. Фотограф'}
]

const handleOnDragStart = (e) => e.preventDefault()

const renderUserList = () => {
    return (
        users.map(user =>
            <div onDragStart={handleOnDragStart} className="user-profile" key={user.id}>
                <img src="/images/interra.png"></img>
                <p className="user-name fw500">{user.name}</p>
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