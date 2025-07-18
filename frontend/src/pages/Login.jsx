import React, { useState, useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const Login = () => {
  
  const navigate = useNavigate()
  const {backendUrl, token, setToken} = useContext(AppContext)

  const [logState, setLogState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    //call API
    try {
      
      if(logState === 'Sign Up'){
        const {data} = await axios.post(backendUrl + '/api/user/register', {name, password, email})
        if(data.success){
           localStorage.setItem('token', data.token)
           setToken(data.token)
        } else{
          toast.error(data.message)
        }
      } else {  //if state is login
          
        const {data} = await axios.post(backendUrl + '/api/user/login', {password, email})
        if(data.success){
           localStorage.setItem('token', data.token)
           setToken(data.token)
        } else{
          toast.error(data.message)
        }
      }
       
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token){
      navigate('/') 
    }
  }, [token])
  

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>
        {logState === 'Sign Up' ? "Create Account" : "Login"}
      </p>
      <p>Please {logState === 'Sign Up' ? "sign up" : "log in"} to book service</p>
      {
        logState == "Sign Up" && <div className='w-full'>
        <p>Full Name</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value = {name} required />
      </div>
      }
      <div className='w-full'>
        <p>Email</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value = {email} required />
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value = {password} required />
      </div>
      <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>
        {logState === 'Sign Up' ? "Create Account" : "Login"}
      </button>
      {
        logState === "Sign Up" ? <p>Already have an account? <span onClick={()=> setLogState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
        : <p>Create a new account? <span onClick={() => setLogState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
      }
      </div>
    </form>
  )
}

export default Login