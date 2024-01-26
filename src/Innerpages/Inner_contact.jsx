import React from 'react'
import {AiOutlineMail } from 'react-icons/ai';
import oliva from '../assets/oliva.jpg'


const Inner_contact =()=> {
  return (
   <div className='pt-[8vh]  bg-slate-500'>

     
     <div className='max-w-[800px]  m-auto px-4 py-16 '>
      <div className=' dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
        <h1 className='text-2xl font-bold text-gray-800' > Contact us </h1> 
         
         <form>
           <div className='grid md:grid-cols-2 md:gap-8' >
           <div className='md:my-4'>
             <label>Username</label>
             <div className='my-2 w-full relative'>
                 <input className="w-full p-2 border border-gray-400 bg-transparent rounded-lg"
             type='username' placeholder=' Enter username' name='username'/>
             </div>
            </div>
            <div className='md:my-4'>
            <label>Email Address</label>
            <div className='my-2 w-full relative'>
              <input className="w-full p-2 border border-gray-400 bg-transparent rounded-lg" 
               type='email' placeholder='email address' name='email'/>
                <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
              </div>
               </div>
               <div className='md:my-4 ='>
            <label>message</label>
            <div className='my-2 w-full relative'>
              <input className="w-full p-2 border py-10 border-gray-400 bg-transparent rounded-lg" 
               type='message' placeholder='message' name='message'/>
             <button className='py-3 px-6 sm:w-[66%] my-4 bg-black text-white rounded-xl'>send</button>

              </div>
               </div>
               
           </div>
         </form>
       </div>
        </div>
        
   </div>
  )
}

export default Inner_contact