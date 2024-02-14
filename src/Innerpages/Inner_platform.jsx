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


const categoryOption=[
    "male",
    "female",
    "custom"
];

const stateOption =[
    'Abi state','Admawa state','Akwa Ibom state','Anambra state','Bauchi state','Bayelsa state','Benue state',
    'Borno state','cross River state','Detla state','Ebonyi state','Edo state','Ekiti state','Enugu state','Gombe state',
    'Imo state','Jigawa state','Kaduna state','Kano state','Katsine state','Kebbi state','Kogi state','kwara state','Lagos state',
    'Nasarawa state','Niger state','Ogun state','Ondo state','Osun state','Oyo state','Plateau state','River state','Sokoto state',
    'Taraba state','Yobe state','Zaamfara state','federal Capital Territory (FCT)'
];
const initialState={
    First_name:'',
    Last_name:'',
    Permanent_Address:'',
    LAG:'',
    Date_of_Birth:'',
    Phone_number:'',
    Gender:'',
    State_of_origin:'',
    City:''
    

};





const Inner_platform=()=> {

    const [formValue,setFormValue]= useState(initialState);

    const {First_name,Last_name,Permanent_Address,LAG,Date_of_Birth,Phone_number,Gender,State_of_origin,City
    }=formValue;
    
    //targeting the category input 
    const onInputchange= (e)=>{
        setFormValue({...formValue,[e.target.name]:e.target.value});
    };
    
    
    //targeting the category input 
    const onCategoryChange_three= (e)=>{
        setFormValue({...formValue,State_of_origin:e.target.value});
    };
    
    //targeting the category input 
    const onCategoryChange_two= (e)=>{
        setFormValue({...formValue,Gender:e.target.value});
    };



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
                            name='First_name'
                            value={First_name}
                            onChange={onInputchange}
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
                            name='Last_name' 
                            value={Last_name}
                            onChange={onInputchange}
                            />
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
                            name='Permanent_Address' 
                            value={Permanent_Address}
                            onChange={onInputchange}
                            />
                            <FaRegAddressCard className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>
                    <div className='md:my-4'>
                        <label>L.G.A</label>
                        <div className='my-2 w-full relative'>
                        <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="text" 
                            placeholder ="L.G.A"
                            name='LAG' 
                            value={LAG}
                            onChange={onInputchange}
                            />
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
                            name='Date-of-Birth' 
                            value={Date_of_Birth}
                            onChange={onInputchange}
                            />
                        </div>
                    </div>

                    <div className='md:my-4'>
                    <label>phone number</label>
                        <div className='my-2 w-full relative'>
                        <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="phone" 
                            placeholder ="234****"
                            name='Phone_number' 
                            value={Phone_number}
                            onChange={onInputchange}
                            />
                             <IoPhonePortraitOutline className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>

                    </div>

                    <div className='grid md:grid-cols-2 md:gap-8'>

                        <div className='md:my-4'>
                        <label>State of oringin</label>
                        <div className='my-2 w-full relative'>
                        <select value={State_of_origin} onChange={onCategoryChange_three}>
                        <option>Select Option</option>
                        {stateOption.map((option,index)=>(
                            <option value={option || ""} key={index}>{option}</option>

                        ))}
                        </select>
                        </div>
                    </div>
                    <div className='md:my-4'>
                    <label>city</label>
                        <div className='my-2 w-full relative'>
                        <input className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                            type="city" 
                            placeholder ="city"
                            name='City' 
                            value={City}
                            onChange={onInputchange}
                            />
                             <FaCity  className ='absolute right-2 top-3  text-gray-400'/>
                        </div>
                    </div>
                    
                  </div>
                  <div className='grid md:grid-cols-1 md:gap-8'>
                  <div className='md:my-4'>
                        <label>Gender</label>
                        <div className='my-2 w-full relative'>
                        <select value={Gender} onChange={onCategoryChange_two}>
                        <option>Select Option</option>
                        {categoryOption.map((option,index)=>(
                            <option value={option || ""} key={index}>{option}</option>

                        ))}
                        </select>
                        </div>
                    </div>


              </div>

                    
                
                

            </form>

        </div>
      
    </div>
  )
}

export default Inner_platform