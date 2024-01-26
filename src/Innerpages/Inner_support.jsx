import React from 'react'
import oliva from '../assets/oliva.jpg'





const Inner_support=()=> {
  return (
    <div className='pt-[8vh]' >

<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pt-4'>

<div className='flex'>
 <section  className='max-w-[1240px] mx-auto text-white relative'>
 <div  className='px-4 py-12'>
        <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'> Support </h2>
        <h3 className='text-5xl font-bold py-6 text-center'> Finding the right team</h3>
        <p className='py-4 text-3xl text-slate-300'> Developers and marketers use Cloud to quickly and easily create, 
        manage and deliver their digital experiences across any browser, device and bandwidth.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          
        </div>


</section>
</div>

<div>
<img src={oliva} alt="bg-image" />

</div>    
 




</div>

          

    </div>
  )
}

export default Inner_support