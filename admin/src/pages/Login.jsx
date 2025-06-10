import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {AdminContext} from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {

  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setAdminToken, backendUrl} = useContext(AdminContext)

  //when we will submit form, this function wil be executed
  const onSubmitHandler = async (event) => {
    event.preventDefault()  //will restrict to reload the page
    //call API
    try {

      if(state === 'Admin'){
        
        const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
        if(data.success){
          //we will get one token, set this out
          localStorage.setItem('adminToken', data.token)
          setAdminToken(data.token)
        }
        else{
          toast.error(data.message)
        }

      }
      else{  //worker Api calling

      }
      
    } catch (error) {
      
    }
  }

  return (
   <form onClick={onSubmitHandler} className='min-h-[80vh] flex items-center'>
    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] shadow-lg'>
        <p className='text-2xl font-semibold m-auto'>
          <span className='text-primary'>{state}</span> Login </p>
        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
          <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
        {
          state === 'Admin'
          ? <p>Worker Login? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Worker')}>Click here</span></p>
          : <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Admin')}>Click here</span></p>
        }
    </div>
   </form>
  )
}

export default Login