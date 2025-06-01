import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedWorkers from "../components/RelatedWorkers";

const Appointment = () => {

  //fetch worker id
  const {workId} = useParams();
  //fetch workers array from AppContext
  const { workers, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const [workInfo, setWorkInfo] = useState(null)
  const [workSlots, setWorkSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  //now find specific worker info with workId from the workers array
  const fetchWorkInfo = async () => {
    const workInfo = workers.find(work => work._id === workId);
    setWorkInfo(workInfo)
    console.log(workInfo)
  };

  const getAvailableSlots = async ()=>{
  //  first clear previous slots
  setWorkSlots([])
  // getting current date
  let today = new Date()

  // using this variable, calculate seven days from today
  for(let i =0; i<7; i++){
    // getting date with index
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() +i)

    // setting end time of the date with index
    let endTime = new Date()
    endTime.setDate(today.getDate() +i)
    endTime.setHours(21,0,0,0)

    //setting hours
    if(today.getDate() === currentDate.getDate()){ 
       currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
       currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
    }
    else{
      currentDate.setHours(10)
      currentDate.setMinutes(0)
    }
      
    let timeSLots = []

    while(currentDate < endTime){
     let formattedTime = currentDate.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})

     //add slot to array
     timeSLots.push({
      datetime: new Date(currentDate),
      time: formattedTime
     })

     //increment current time by 30 minutes
     currentDate.setMinutes(currentDate.getMinutes() + 30)
    }

    setWorkSlots(prev => ([...prev, timeSLots]))
  }
  }
  //now whenever we change workId, workers array we would render and will run this function
  useEffect(() => {
    fetchWorkInfo()
  }, [workers, workId])

  useEffect(() => {
    getAvailableSlots()
  }, [workInfo])

  useEffect(() => {
    console.log(workSlots)
  }, [workSlots])
  

  return workInfo && (
   <div>
    {/* -------------worker details---------- */}
    <div className="flex flex-col sm:flex-row gap-4">
      <div>
        <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={workInfo.image} alt="" />
      </div>
      <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:m-0">
        {/* ---------worker info: name, degree, speciality, experience */}
        <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">{workInfo.name}
           <img className="w-5" src={assets.verified_icon} alt="" /></p>
      <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
        <p>{workInfo.degree} - {workInfo.speciality}</p>
        <button className="py-0.5 px-2 border text-xs rounded-full">{workInfo.experience}</button>
      </div>

      {/* -------worker about----------- */}
      <div>
        <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">About <img src={assets.info_icon} alt="" /></p>
        <p className="text-sm text-gray-500 max-w-[700px] mt-1">{workInfo.about}</p>
      </div>
      <p className="text-gray-500 font-medium mt-4">
        Service charge: <span className="text-gray-600">{currencySymbol}{workInfo.fees}</span>
      </p>
    </div>
  </div>

  {/* --------------Booking slots----------- */}
  <div className="sm:ml-72 mt-4 font-medium text-gray-700">
    <p>Your Preferred Time</p>
    <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
      {
        workSlots.length && workSlots.map((item, index) =>(
          <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
          </div>
        ))
      }
    </div>

    <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
      {workSlots.length && workSlots[slotIndex].map((item, index) => (
        <p onClick={()=> setSlotTime(item.time)} className= {`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' :'text-gray-500 border border-gray-400' }`} key={index}>
           {item.time.toLowerCase()}
        </p>
      )) }
    </div>
    <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
      Schedule your visit
    </button>
  </div>
   
   {/* ---------listing related workers---------- */}
   <RelatedWorkers speciality = {workInfo.speciality} workId = {workId}/>

  </div>
  )
}
export default Appointment;
