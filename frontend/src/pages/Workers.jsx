import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Workers = () => {
    
   const {workers} = useContext(AppContext)
   const navigate = useNavigate()
   
   const [showFilter, setShowFilter] = useState(false)
   const {speciality} = useParams()   //to fetch speciality id from the home page
   const [filterWork, setFilterWork] = useState([])
   
   const applyFilter = () =>{
    if(speciality){
      setFilterWork(workers.filter(work => work.speciality === speciality)) //filter those which have speciality similar to input speciality
    }
    else{
      setFilterWork(workers)
    }
   }

   //now if workers and speciality changes, we need a effect of conditional rendering through calling of applyFilter method
   useEffect(() => {
     applyFilter()
   }, [speciality, workers])
   
   
  return (
    <div>
      <p className='text-gray-600'>
        Find experts by profession
      </p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Carpenter' ? navigate('/workers') : navigate('/workers/Carpenter')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Carpenter" ? "bg-amber-100 text-black" : ""}`}>Carpenter</p>
          <p onClick={() => speciality === 'Cleaner' ? navigate('/workers') : navigate('/workers/Cleaner')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Cleaner" ? "bg-amber-100 text-black" : ""}`}>Cleaner</p>
          <p onClick={() => speciality === 'Electrician' ? navigate('/workers') : navigate('/workers/Electrician')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Electrician" ? "bg-amber-100 text-black" : ""}`}>Electrician</p>
          <p onClick={() => speciality === 'Mason' ? navigate('/workers') : navigate('/workers/Mason')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Mason" ? "bg-amber-100 text-black" : ""}`}>Mason</p>
          <p onClick={() => speciality === 'Painter' ? navigate('/workers') : navigate('/workers/Painter')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Painter" ? "bg-amber-100 text-black" : ""}`}>Painter</p>
          <p onClick={() => speciality === 'Plumber' ? navigate('/workers') : navigate('/workers/Plumber')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Plumber" ? "bg-amber-100 text-black" : ""}`}>Plumber</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterWork.map((item, index) => (
          <div onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-orange-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-orange-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>{" "}
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Workers