import { useState } from 'react';
import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {auth,}from '../Firebase/firebaseconfig';
import { signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-toastify";

import {AiOutlineMail, AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'

// initial State for the input state
const initialState ={
  email:'',
  password:'',
}


const Login=({setisAuth, setUser})=> {

  const Navigate = useNavigate();
    const [passwordEye, setPasswordEye] = useState(false);


    const [formValue, setFormValue] =useState(initialState);
    const {email,password} =formValue;

    //targeting the input
    const onInputchange =(e) =>
    setFormValue({...formValue,[e.target.name]:e.target.value});

    // //func... for password 
     const handlePasswordEye = () => {
      setPasswordEye(!passwordEye)
    }

    //submit functonality
    const handleSubmite =async(e) =>{
      e.preventDefault();
       
       if (email ===  '' || password=== ''){
        return toast.error('please fill all the input field');
       }else{
        try{
          if (email && password) {
            const {User}=await signInWithEmailAndPassword(
              auth,email,password
            )
            setUser(User)
            localStorage.setItem('IsAuthorised',true)
            setisAuth (true)
            toast.success("login successfully")
            Navigate('/')
          }
        }catch(error){
          toast.error(error.message)
        }
       }


    }


    

  return (
    <div className='pt-[8vh] '>
    <div className='max-w-[800px] m-auto px-4 py-16 '>
      <div className=' dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
        <h1 className='text-2xl font-bold text-gray-800' > Login Account </h1> 
        <form onSubmit={handleSubmite}>
          <div className='grid md:grid-cols-2 md:gap-8'>
            <div className='md:my-4'>
              <label>Email Address</label>
              <div className='my-2 w-full relative '>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type="email" 
                  placeholder='Enter Email Address' 
                  name='email'
                  value={email} 
                  onChange={onInputchange}
                />
                <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
              </div>
            </div>
            <div className='md:my-4'>
              <label>Password</label>
              <div className='my-2 w-full relative '>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type={(passwordEye === false) ? 'password' : 'text'} 
                  placeholder='Enter Password'
                  name='password'
                  value={password}
                  onChange={onInputchange}
                />
                <div className='absolute right-2 top-3'>
                  {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
                </div>
              </div>
            </div>
          </div>

          <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and conditions & privacy policy</span></p>
                 
          <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#02020F] text-white rounded-lg font-semibold'> Login Account </button>
        </form>

        
        <hr className="my-6 border-gray-300 w-full" />
     
        <button className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
          <div className="flex items-center justify-center">
          <FcGoogle className='w-7 h-7'/>
              <span className="ml-4"> Log in with Google </span>
          </div>
        </button>

        <p className='my-4'>Don't have an account? <Link className='text-[#986c55] underline' to='/register'>Signup</Link></p>
      </div>
    </div>
  </div>
    
  )
}

export default Login