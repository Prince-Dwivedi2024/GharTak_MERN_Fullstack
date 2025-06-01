import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Workers from './pages/Workers'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Nav from './components/Nav'
import Footer from './components/Footer'

const router = createBrowserRouter(
  [
    {
      path : '/',
      element : 
      <div>
        <Nav/>
        <Home/>
        <Footer/>
        </div>
    },

    {
      path : '/workers',
      element : 
      <div>
        <Nav/>
        <Workers/>
        <Footer/>
        </div>
    },

    {
      path : '/workers/:speciality',
      element : 
      <div>
        <Nav/>
        <Workers/>
        <Footer/>
        </div>
    },

    {
      path : '/about',
     element : 
      <div>
        <Nav/>
        <About/>
        <Footer/>
        </div>
    },

    {
      path : '/myProfile',
      element : 
      <div>
        <Nav/>
        <MyProfile/>
        <Footer/>
        </div>
    },

    {
      path : '/myAppointments',
      element : 
      <div>
        <Nav/>
        <MyAppointments/>
        <Footer/>
        </div>
    },

    {
      path : '/login',
      element : 
      <div>
        <Nav/>
        <Login/>
        <Footer/>
        </div>
    },

    {
      path : '/contact',
      element : 
      <div>
        <Nav/>
        <Contact/>
        <Footer/>
        </div>
    },

    {
      path : '/about',
      element : 
      <div>
        <Nav/>
        <About/>
        <Footer/>
        </div>
    },

    {
      path : '/appointment/:workId',
      element : 
      <div>
        <Nav/>
        <Appointment/>
        <Footer/>
        </div>
    },
  ]
)

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App  