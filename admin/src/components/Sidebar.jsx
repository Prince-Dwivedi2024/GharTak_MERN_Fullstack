import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { WorkerContext } from '../context/WorkerContext'

const Sidebar = () => {

  const {adminToken} = useContext(AdminContext)
  const {workerToken} = useContext(WorkerContext)

  return (
    <div className='min-h-screen bg-white border-r'>
        {/* -------Admin------- */}
        {
            adminToken && <ul className='text-[#515151]'>
                <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-amber-50 border-r-4 border-primary" : ""}`} to={'/dashboard'}>
                    <img src={assets.earning_icon} alt="" />
                    <p className='hidden md:block' >Dashboard</p>
                </NavLink>

                <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-amber-50 border-r-4 border-primary" : ""}`} to={'/appointments'}>
                    <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>

                <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-amber-50 border-r-4 border-primary" : ""}`} to={'/addWorker'}>
                    <img src={assets.add_icon} alt="" />
                    <p className='hidden md:block'>Add Worker</p>
                </NavLink>

                <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-amber-50 border-r-4 border-primary" : ""}`} to={'workersList'}>
                    <img src={assets.users_icon} alt="" />
                    <p className='hidden md:block'>Workers List</p>
                </NavLink>
            </ul>
        }
           
                {/*---------Worker-------- */}
         {
            workerToken && <ul className='text-[#515151]'>
                <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-amber-50 border-r-4 border-primary" : ""}`} to={'/worker-dashboard'}>
                    <img src={assets.earning_icon} alt="" />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>

                <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-amber-50 border-r-4 border-primary" : ""}`} to={'/worker-appointments'}>
                    <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>

                <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-amber-50 border-r-4 border-primary" : ""}`} to={'worker-profile'}>
                    <img src={assets.users_icon} alt="" />
                    <p className='hidden md:block'>Profile</p>
                </NavLink>
            </ul>
        }

    </div>
  )
}

export default Sidebar