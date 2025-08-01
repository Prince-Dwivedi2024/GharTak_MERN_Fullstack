import React from 'react'
import { useContext } from 'react'
import { WorkerContext } from '../../context/WorkerContext'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const WorkerProfile = () => {

const {workerToken, profileData, setProfileData, getProfileData, backendUrl} = useContext(WorkerContext)
const {currency} = useContext(AppContext)

const [isEdit, setIsEdit] = useState(false)

const updateProfile = async () => {

  try {

    const updateData = {
      address: profileData.address,
      fees: profileData.fees,
      available: profileData.available
    }

    const {data} = await axios.post(backendUrl + '/api/worker/update-profile', updateData, {headers: { Authorization: `Bearer ${workerToken}` },})

    if(data.success) {
      toast.success(data.message)
      setIsEdit(false)
      getProfileData()
    } else {
      toast.error(data.message)
    }
    
  } catch (error) {
    toast.error(error.message)
    console.log(error);
    
  }

}

useEffect(()=>{
  if(workerToken){
    getProfileData()
  }
},[workerToken])

  return profileData && (
    <div>

      <div className='flex flex-col gap-4 m-5'>

        <div>
          <img className='bg-primary/80 w-full sm:max-w-64 rounded-lg hover:bg-primary' src={profileData.image} alt="" />
        </div>

        <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>
          {/* -------worker info:name, degree, experience etc------- */}
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
          <div className='flex items-start gap-2 mt-1 text-gray-600'>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>
          </div>
          {/* -------worker about------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3'>About:</p>
            <p className='text-sm text-gray-600 msx-w-[700px] mt-1'>{profileData.about}</p>
          </div>

          <p className='text-gray-600 font-medium mt-4'>
            Booking fee: <span className='text-gray-800'>{currency} {isEdit ? <input type="number" onChange={(e)=> setProfileData(prev => ({...prev, fees: e.target.value}))} value={profileData.fees} /> : profileData.fees}</span>
          </p>

          <div className='flex gap-2 py-2'>
            <p>Address:</p>
            <p className='text-sm'>
              {isEdit? <input type="text" onChange={(e)=> setProfileData(prev => ({...prev, address:{...prev.address, line1:e.target.value}}))} value={profileData.address.line1} /> :profileData.address.line1}
              <br />
              {isEdit? <input type="text" onChange={(e)=> setProfileData(prev => ({...prev, address:{...prev.address, line2:e.target.value}}))} value={profileData.address.line2} /> :profileData.address.line2}
            </p>
          </div>

          <div className='flex gap-1 pt-2'>
            <input onChange={()=> isEdit && setProfileData(prev => ({...prev, available: !prev.available}))} checked = {profileData.available} type="checkbox" name='' id='' />
             <label htmlFor="">Available</label>
           </div>

           {
            isEdit
            ? <button onClick={updateProfile} className='px-4 py-1 border bg-blue-50 border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save Informations</button>
            : <button onClick={()=> setIsEdit(true)} className='px-4 py-1 border bg-blue-50 border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
           }
            
        </div>

      </div>

    </div> 
  )
}

export default WorkerProfile