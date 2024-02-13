import React from 'react'
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import {auth,db} from '../Firebase/firebaseconfig';
import { addDoc,collection,getDoc,serverTimestamp,doc,updateDoc } from 'firebase/firestore';
import { useNavigate,useParams } from 'react-router-dom';
import {FaBaby,FaRegAddressCard} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';
import {CgProfile} from 'react-icons/cg'
import { GiWeightScale} from 'react-icons/gi'
import { FaCity } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";



const Inner_platform=()=> {
  return (
    <div  className='max-w-[800px] m-auto px-4 py-16'>
        <div className='dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>

            <h1 className='text-2xl font-bold text-gray-800 mb-4'>cloud Registration</h1>
            <form >
                <div className='grid md:grid-cols-2 md:gap-8'>

                    <div className='md:my-4'>
                        <label>First name</label>
                        <div className=' my-2  w-full relative'>
                            <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="text" 
                            placeholder ="first name"
                            name='first_name'
                            />
                            <CgProfile className ='absolute right-2 top-3  text-gray-400'/>

                        </div>
                    </div>

                    <div className='md:my-4'>
                        <label>last name</label>
                        <div className='my-2 w-full relative'>
                        <input className='my-2 w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="text" 
                            placeholder ="last name"
                            name='last_name' />
                            <CgProfile className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 md:gap-8'>

                <div className='md:my-4'>
                        <label>permanemt Address</label>
                        <div className='my-2 w-full relative'>
                        <input 
                        className=' w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="text" 
                            placeholder ="Rumuola street"
                            name='permanent_Address' />
                            <FaRegAddressCard className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>
                    <div className='md:my-4'>
                        <label>L.G.A</label>
                        <div className='my-2 w-full relative'>
                        <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="text" 
                            placeholder ="L.G.A"
                            name='LGA' />
                            < GrLocation className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 md:gap-8'>
                  
                <div className='md:my-4'>
                        <label>Date of Birth</label>
                        <div className='my-2 w-full relative'>
                        <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="date" 
                            placeholder ="dd/mm/yyyy"
                            name='date-of-birth' />
                        </div>
                    </div>

                    <div className='md:my-4'>
                    <label>phone number</label>
                        <div className='my-2 w-full relative'>
                        <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="phone" 
                            placeholder ="234****"
                            name='phone-number' />
                             <IoPhonePortraitOutline className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>

                    </div>

                    <div className='grid md:grid-cols-2 md:gap-8'>

                        <div className='md:my-4'>
                        <label>city</label>
                        <div className='my-2 w-full relative'>
                        <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="phone" 
                            placeholder ="city"
                            name='city' />
                             <   FaCity className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>
                  </div>


                    
                
                

            </form>

        </div>
      
    </div>
  )
}

export default Inner_platform