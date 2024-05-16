import { ShoppingCart } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { Footer } from '../Components/Footer'
import { DataCon } from '../Context/Context'
import { Link } from 'react-router-dom'

export function HomeB() {
    const { Names, Cards } = useContext(DataCon)
    return (
        <>
            <br />
            <div className='container w-full flex justify-between'>
                <div className='w-[30%] bg-white rounded-3xl p-[20px]'>
                    <p className='font-bold text-xl'>Меню</p>
                    <br />
                    <div className='w-full  bg-[#f5f5f5] rounded-3xl p-[10px] flex items-start flex-col'>
                        <div className='w-full h-[70px] bg-white flex items-center justify-start p-[10px] rounded-3xl'>
                            <p className='font-bold text-xsl'>Летнее меню</p>
                        </div>
                        <br />
                        {Names.map((item, index) => (
                            <div className='w-full h-[40px] px-3' key={index}>
                                <p className='hover:text-black text-gray-500 cursor-pointer'>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[68%] bg-white rounded-3xl p-[20px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Каталог</p>
                        <select className='outline-none px-[10px] text-gray-500'>
                            <option>
                                Сначала дешевле
                            </option>
                        </select>
                    </div>
                    <br />
                    <div className='w-full flex flex-wrap  justify-between gap-3'>
                        {Cards.map((item, index) => (
                            <div id='hidden2' key={index} className='w-[210px] h-[350px] flex bg-[#f5f5f5] rounded-3xl flex-col '>
                                <div className='w-full flex justify-center items-center h-[200px] px-[15px]'>
                                    <img src={item.img} alt="pic" />
                                </div>
                                <div className='w-full flex justify-between items-center text-gray-500 px-[15px]'>
                                    <p>{item.gr} гр.</p>
                                    <p>{item.kkal} ккал.</p>
                                </div>
                                <hr />
                                <div className='w-full flex justify-between items-center font-bold px-[15px]'>
                                    <p>{item.name}</p>
                                    <p>{item.price} ₽</p>
                                </div>
                                <div id='hidden3' className='w-full text-gray-500 px-[15px]'>
                                    <p>{item.title}</p>
                                </div>
                                <div id='hidden' className='cursor-pointer w-full h-[50px] bg-[#a16341] flex items-center justify-center rounded-ee-3xl rounded-es-3xl '>
                                    <Link to={"/" + item.id}><ShoppingCart color='#fff' size={24} /></Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
