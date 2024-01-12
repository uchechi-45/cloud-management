import React from 'react'
import world from '../assets/world.gif'

const Home_innerpage=()=> {
  return (
    <div className='w-full h-[100%] pt-[10vh] bg-[#F3F3EB] flex flex-col justify-between '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>


            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>unique sequencing & production</p>
                <h1 className='pt-3 text-4xl md:text-6xl font-bold'>Cloud</h1>
                <h1 className='text-4xl text font-bold md:text-6xl'>Management</h1>
                <p className='pt-3 text-2xl'>This is Our Tech Brand</p>
                <button className='py-3 px-6 sm:w-[66%] my-4 bg-black text-white rounded-xl'>Get Started</button>
            </div>
            <div>
                <img src={world} alt="grid-image" className='w-[100%]' />
            </div>
          

        </div>

    </div>
  )
}

export default Home_innerpage