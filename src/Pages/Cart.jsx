import React from 'react'
import { Footer } from '../Components/Footer'

export const Cart = () => {
    return (
        <section>
            <div className='container'>
                <div className=" flex restangle w-[1200px] bg-pink-100 h-[255px] m-10 rounded-md">
                    <div className=" p-10 pl-20">
                        <h1 className='text-5xl font-serif font-semibold'>Оптовые продажи</h1>
                        <p className='p-3'>Вы всегда можете приобрести нашу <br /> продукцию в следующих магазинах:</p>
                        <button className='w-[205px] h-[39px] bg-[#A16341] text-slate-100 rounded-2xl hover:bg-[#ca7e55]'>Связаться с менеджером</button>
                    </div>

                    <div className='w-[400px] flex flex-wrap h-[20px] items-center pl-14 m-6 gap-2 gap-y-5 gap-x-10'>
                        <img src="../img/lenta.png" alt="" />
                        <img src="../img/samokat.png" alt="" />
                        <img src="../img/magnit.png" alt="" />
                        <img src="../img/skidno.png" alt="" />
                        <img src="../img/karavan.png" alt="" />
                    </div>
                </div>
                <div className='w-[1000px] pl-28'>
                    <h1 className='text-4xl font-serif font-medium '>Условия оптовых продаж</h1> <br />
                    <p>В слабопеременных полях (при флуктуациях на уровне единиц процентов) лазер экстремально синхронизует эксимер. Мишень по определению пространственно притягивает квантовый пульсар. Если для простоты пренебречь потерями на теплопроводность, то видно, что химическое соединение синхронно. Исследователями из разных лабораторий неоднократно наблюдалось, как колебание последовательно стабилизирует поток по мере распространения сигнала в среде с инверсной населенностью. </p> <br />
                    <p>
                        Неустойчивость, как известно, быстро разивается, если плазма неустойчиво притягивает вихревой гамма-квант. Силовое поле, по данным астрономических наблюдений, вращает погранслой. Если предварительно подвергнуть объекты длительному вакуумированию, взвесь мономолекулярно представляет собой фонон, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Расслоение поглощает фонон. Течение среды усиливает осциллятор.
                    </p> <br />
                    <p>
                        Волна едва ли квантуема. В самом общем случае струя бифокально стабилизирует фотон. Излучение, на первый взгляд, переворачивает адронный гидродинамический удар, генерируя периодические импульсы синхротронного излучения.
                    </p>
                </div> <br />
                <div className="pl-24 bg-slate-50">
                    <img src="../img/screen.png" alt="" />
                    <div className='flex gap-10 '>
                        <input type="text" placeholder='Ваше имя' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='password' />
                    <button className='w-[205px] h-[49px] bg-[#A16341] text-slate-100 rounded-2xl hover:bg-[#ca7e55]'>Отправить</button>
                    </div>
                </div>
            </div> <br />
            <Footer/>
        </section>
    )
}
