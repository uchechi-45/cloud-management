import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
// import logo from './assets/logo-removebg-preview(1).png'
import logo from '../assets/cloudd.png'


const Navbar=()=> {

  const [nav, setNav] = useState(false);

  const handlclick =()=>{
    setNav(!nav)

  };

  const handlclose =()=>{
    setNav(!nav)

  };


  return (
    <div className='w-screen h-[80px] z-10 bg-[#f9f9f9] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'><img src={logo} 
          className='w-8 mr-2' alt="img logo" />cloud</h1>
         

         <ul className='hidden md:flex gap-7 font-bold text-2xi px-40'>
           <li>Home</li>
           <li>About</li>
           <li>Support</li>
           <li>platform</li>
           <li>pricing</li>
         </ul>
        </div>
         <div className='hidden md:flex pr-4'>
          <button className='border-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3 mr-4'>Login</button>
          <button className='border-none bg-[#201f1f] text-[#eedfdf] rounded-xl px-5 py-3 mr-4'>Register</button>
         </div>

         <div className='md:hidden mr-4' onClick={handlclick}> 
         {nav ? <IoMenuSharp size={25}/>: <IoMdClose size={25}/>}

         </div>
      </div>
    <ul className={!nav ? 'hidden': 'absoulte bg-[#f9f9f9] w-[100%] px-8'} onClick={handlclose}>
      <li className='border-b-2 py-3 border-black-300 w-full'>Home</li>
      <li className='border-b-2 py-3 border-black-300 w-full'>About</li>
      <li className='border-b-2 py-3 border-black-300 w-full'>Support</li>
      <li className='border-b-2 py-3 border-black-300 w-full'>Platform</li>
      <li className='border-b-2 py-3 border-black-300 w-full'>Pricing</li>

<div className='flex flex-col my-4'>
  <button className='bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl'>Login</button>
  <button className='bg-[#201f1f] text-[#eedfdf] px-8 py-3 mb-4 rounded-2xl'>Register</button>


</div>




    </ul>
    </div>
  )
}

export default Navbar