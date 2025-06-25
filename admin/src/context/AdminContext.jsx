import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) => { 

    const[adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') ? localStorage.getItem('adminToken') : '')
    const [workers, setWorkers] = useState([]) 
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllWorkers = async () => {
        try {
            
          const {data} = await axios.post(backendUrl + '/api/admin/allWorkers', {}, {headers: {Authorization: `Bearer ${adminToken}`,},} )
          if(data.success){
            setWorkers(data.workers)
            console.log(data.workers)
          } else{
            toast.error(data.message)
          }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (workId) => {
        
         try {
          
          const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {workId}, {headers: {Authorization: `Bearer ${adminToken}`,},})
          if(data.success){
            toast.success(data.message)
            getAllWorkers()
          } else{
            toast.error(data.message)
          }

         } catch (error) {
           toast.error(error.message)
         }

    }

    const getAllAppointments = async () => {

      try {

        const {data} = await axios.get(backendUrl + '/api/admin/appointments', {headers: {Authorization: `Bearer ${adminToken}`,},})

        if(data.success){
          setAppointments(data.appointments)
          console.log(data.appointments)
        } else {
          toast.error(data.message)
        }
        
      } catch (error) {
        toast.error(error.message)
      }

    }

    //API call to cancel appointments
    const cancelAppointment = async (appointmentId) => {
      
    try {

      const {data} = await axios.post(backendUrl + '/api/admin/cancel-appointment', {appointmentId}, {headers: {Authorization: `Bearer ${adminToken}`,},})

      if(data.success){
        toast.success(data.message)
        getAllAppointments()
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }

    }

    //API call to get dashboard data
    const getDashData = async () => {

    try {

      const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers: {Authorization: `Bearer ${adminToken}`,},})

      if(data.success){
        setDashData(data.dashData)
        console.log(data.dashData)
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }

    }

    const value = {
      adminToken, setAdminToken,
      backendUrl, workers, getAllWorkers, changeAvailability,
      appointments, setAppointments, getAllAppointments,
      cancelAppointment,
      dashData, getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider