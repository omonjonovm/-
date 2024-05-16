import { AppStoreLogo, Envelope, GoogleLogo } from '@phosphor-icons/react'
import { Phone } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import { Footer } from '../Components/Footer'

export function Users() {
    return (
        <>
            <section>
                <div className="container w-full h-screen flex items-center justify-center">
                    <div className='w-[40%] h-[530px] bg-white rounded-3xl p-[40px]'>
                        <p className='text-xl font-bold text-center'>Авторизация</p>
                        <p className='text-center text-gray-500'>Кварк, как следует из совокупности экспериментальных наблюдений, квантуем. Многочисленные расчеты предсказывают</p>
                        <br />
                        <div className='w-full flex flex-col gap-5'>
                            <button className='w-full h-[50px] bg-blue-500 flex justify-center items-center gap-5 text-white font-bold rounded-3xl'><AppStoreLogo size={30} /> Продолжить с AppStore</button>
                            <button className='w-full h-[50px] bg-red-500 flex justify-center items-center gap-5 text-white font-bold rounded-3xl'><GoogleLogo size={30} /> Продолжить с Google</button>
                        </div>
                        <br />
                        <div className=' text-gray-500 text-xl text-center'>
                            ------------------------ Или -------------------------
                        </div>
                        <br />
                        <div className='w-full flex flex-col gap-5'>
                            <button className='w-full h-[50px] bg-yellow-500 flex justify-center items-center gap-5 text-white font-bold rounded-3xl'><Envelope size={30} /> Продолжить с почтой</button>
                            <button className='w-full h-[50px] bg-green-500 flex justify-center items-center gap-5 text-white font-bold rounded-3xl'><Phone size={30} /> По номеру телефона</button>
                        </div>
                    </div>
                </div>
                    <Footer />
            </section>
        </>
    )
}
