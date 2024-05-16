import React from 'react';
import { Link } from 'react-router-dom'
export const Roznitsa = () => {
  const Kard = [
    {
      id: new Date().getTime(),
      img: "../img/acm.png",
      name: "Коллаж",
      des: "Амурская улица, 22А",
      time: "пн-пт 9:00-19:00",
    },
    {
      id: new Date().getTime(),
      img: "../img/acm.png",
      name: "Коллаж",
      des: "Амурская улица, 22А",
      time: "пн-пт 9:00-19:00",
    },
    {
      id: new Date().getTime(),
      img: "../img/acm.png",
      name: "Коллаж",
      des: "Амурская улица, 22А",
      time: "пн-пт 9:00-19:00",
    },
    {
      id: new Date().getTime(),
      img: "../img/acm.png",
      name: "Коллаж",
      des: "Амурская улица, 22А",
      time: "пн-пт 9:00-19:00",
    },
    {
      id: new Date().getTime(),
      img: "../img/acm.png",
      name: "Коллаж",
      des: "Амурская улица, 22А",
      time: "пн-пт 9:00-19:00",
    },
  ];

  return (
    <section>
      <div className='container p-16'>
        <h1 className='flex justify-center text-3xl font-serif'>Продажи в рознице</h1>
        <div className='flex flex-wrap gap-10 p-10'>
        {Kard.map((item, index) => (
          <div id={`hidden${index}`} key={index} className='border p-1'> 
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.des}</p>
            <p>{item.time}</p>
            <Link to={"/"} className=' w-[190px] h-[17px border-orange-700 border rounded-lg'>Забронировать продукцию</Link>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
