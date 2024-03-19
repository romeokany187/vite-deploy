import React from 'react'
import glori from '../assets/images/logos/glori_1.png'
import malcat from '../assets/images/logos/malcat_2.png'
import arra from '../assets/images/logos/arra_3.png'
import tunda from '../assets/images/logos/tunda_4.png'
import soso from '../assets/images/logos/SOSO_5.png'
import mono from '../assets/images/logos/M_6.png'

const Partenaires = () => {
  return (
    <div>
        <div className="px-[17rem] h-[45vh] bg-white  flex justify-between items-center gap-[3rem] ">
                <div className="w-[40%] ">
                    <h1 className='text-4xl font-extrabold mb-2'>Ceux qui nous ont fait confiance</h1>
                    <hr className='w-16  border-2 border-black mb-2' />
                    <p className='text-xl text-blue-600 underline cursor-pointer'>Plus d'info</p>
                </div>
                <div className=" grid grid-cols-[repeat(3,40%)] grid-rows-[repeat(2,50%)]  ">
                    <img src={glori} className='w-[8rem]' />
                    <img src={malcat} className='w-[8rem]' />
                    <img src={arra} className='w-[8rem]' />
                    <img src={tunda} className='w-[8rem]' />
                    <img src={soso} className='w-[8rem]' />
                    <img src={mono} className='w-[8rem]' />
                </div>
            </div>
    </div>
  )
}

export default Partenaires