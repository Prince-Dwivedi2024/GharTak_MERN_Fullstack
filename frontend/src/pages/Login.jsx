import React, { useState } from 'react'

const Login = () => {

  const [logState, setLogState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')

  const onSubmitHandler = async (event) => {
    event.prevent
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
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
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setMail(e.target.value)} value = {mail} required />
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPass(e.target.value)} value = {pass} required />
      </div>
      <button className='bg-primary text-white w-full py-2 rounded-md text-base'>
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