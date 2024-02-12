import { useState } from 'react';
import {AiOutlineMail, AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import { Link , Navigate, useNavigate} from 'react-router-dom';
import { auth, provider } from '../Firebase/firebaseconfig';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';


const initialState ={
  name: '',
  email: '',
  password :'',
  password2:''
 };

const Register=({setisAuth})=> {

  const Navigate = useNavigate()

  const [formValue,setFormValue] =useState(initialState);
  const {name,email,password,password2} =formValue;


  const onInputChangen = (e)=>{
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }


  const [passwordEye, setPasswordEye] = useState(false);

     // //func... for password 
    const handlePasswordEye = () => {
    setPasswordEye(!passwordEye)
     }




     const handlesubmite = async(e)=>{
       e.preventDefault();
       
       if (name === ''|| email === '' || password=== '' || password2 ===''){
        return toast.error('please fill all the input field');
       };


       if (name === ''|| email ===''||  password === '' || password2 ===''){
        return toast.error('please fill all the input field');
       }else if (password !== password2){
        return toast.error('password do not match');
       }else if (password.length<=6){
        return toast.error('password is not strong');
       }else
       try{
        if (name && email && password) {
          const{user} = await createUserWithEmailAndPassword(
            auth,email,password
          );
          await updateProfile(user,{displayName:`${name}`})
          toast.success('signup successfully');
          localStorage.setItem('IsAuthorised',true);
          setisAuth(true);
          Navigate('/login')
        }
       }catch(error){
        toast.error('user already exit')
        console.error(error)
       }
     }


  return (
    <div className='pt-[8vh]'>
     <div className='max-w-[800px] m-auto px-4 py-16'>
        <div className='dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
            <h1 className='text-2xl font-bold text-gray-800'>Register</h1>

            <form onSubmit={handlesubmite}>
        <div className='grid md:grid-cols-2 md:gap-8'>
             <div className='md:my-4'>
             <label>Username</label>
             <div className='my-2 w-full relative'>
                 <input className="w-full p-2 border border-gray-400 bg-transparent rounded-lg"
                        type='username' placeholder=' Enter username' name='name' value={name} onChange={onInputChangen}/>
             </div>
            </div>

            <div className='md:my-4'>
            <label>Email Address</label>
            <div className='my-2 w-full relative'>
              <input className="w-full p-2 border border-gray-400 bg-transparent rounded-lg" 
               type='email' placeholder='email address' name='email' value={email} onChange={onInputChangen}/>
                <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
              </div>
               </div>


               <div className='md:my-4'>
               <label>Password</label>
               <div className='my-2 w-full relative'>
               <input className="w-full p-2 border border-gray-400 bg-transparent rounded-lg"
               type={(passwordEye === false) ? 'password':'text'} placeholder=' enter password' name='password' value={password} onChange={onInputChangen}/>
               
               <div className='absolute right-2 top-3'>
                  {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
                </div>
            </div>
         </div>
         <div className='md:my-4'>
                    <label>Cornfrim Password</label>
                    <div className='my-2 w-full relative'>
                        <input className="w-full p-2 border border-gray-400 bg-transparent rounded-lg" 
                        type={(passwordEye === false) ? 'Cornfrim password' : 'text'} placeholder='Cornfrim password' name='password2' value={password2} onChange={onInputChangen}/>

                <div className='absolute right-2 top-3'>
                  {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
                </div>
                    </div>
                </div>
                </div>
                <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and conditions
                 & privacy policy</span></p> 
                 <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#02020F]
                  text-white rounded-lg font-semibold'> Register </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 
            font-semibold rounded-lg px-4 py-3 border border-gray-300">
              <div className="flex items-center justify-center" >
              <FcGoogle className='w-7 h-7'/>
              <span className="ml-4"> Log in with Google </span>
              </div>
             </button>
             <p className='my-4'> have an account? <Link className='text-[#986c55] underline' to='/Login'>Login</Link></p>
      </div>
     </div>
  
    </div>
  )
}

export default Register