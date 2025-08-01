import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const WorkersList = () => {

  const {workers, adminToken, getAllWorkers, changeAvailability} = useContext(AdminContext)
  
  useEffect(() => {
    if(adminToken){
      getAllWorkers()
    }
  }, [adminToken])
  

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Workers</h1>

      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
           {
            workers.map((item, index) => (
              <div className='border border-amber-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
                  <img className='bg-amber-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
                  <div className='p-4'>
                    <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                    <p className='text-zinc-600 text-sm'>{item.speciality}</p>
                    <div className='mt-2 flex items-center gap-1 text-sm'>
                      <input onChange={()=> changeAvailability(item._id)} type="checkbox" checked = {item.available}/>
                      <p>Available</p>
                    </div>
                  </div>
              </div>
              
            ))
           }
      </div>
    </div>
  )
}

export default WorkersList