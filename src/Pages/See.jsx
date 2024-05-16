import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataCon } from '../Context/Context'

export default function See() {
    const { id } = useParams()
    const { Cards } = useContext(DataCon)
    const ThisCard = Cards.filter((item) => item.id === +id)[0]
    return (
        <section>
            <div className="container w-full h-[80vh] flex justify-center items-center">
                <div className='w-[70%] h-[70%] bg-white rounded-3xl p-[30px]'>
                    2
                </div>
            </div>
        </section>
    )
}
