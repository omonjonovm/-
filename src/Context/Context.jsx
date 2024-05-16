import React, { createContext } from 'react'
export const DataCon = createContext()
export default function Context({ children }) {
    const Names = [
        {
            title: "Кофе и чай"
        },
        {
            title: "Холодные напитки"
        },
        {
            title: "Комбо"
        },
        {
            title: "Shoko Go"
        },
        {
            title: "Конструктор завтраков"
        },
        {
            title: "Завтраки весь день"
        },
        {
            title: "Блинчики"
        },
        {
            title: "Пицца от Eazzy Pizza & Gelato   "
        },
        {
            title: "Супы"
        },
        {
            title: "Горячие блюда"
        },
        {
            title: "Сэндвичи"
        },
        {
            title: "Только в доставке"
        },
        {
            title: "Салаты"
        },
        {
            title: "Десерты"
        },
        {
            title: "Добавки и соусы"
        },
    ]
    const Cards = [
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card1.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card2.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card3.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card4.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card5.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card6.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card7.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card8.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card1.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card2.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card3.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card4.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card5.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card6.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card7.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card8.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card1.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card2.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card3.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
        {
            name: "Тортик",
            id: new Date().getTime(),
            img: "../img/card4.png",
            gr: 200,
            kkal: 500,
            price: 300,
            title: 'Зеркало синхронизует межатомный магнит.',
        },
    ]
    return <DataCon.Provider value={{ Names, Cards }}>{children}</DataCon.Provider>
}
