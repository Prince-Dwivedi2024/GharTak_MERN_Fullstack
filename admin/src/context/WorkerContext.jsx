import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const WorkerContext = createContext();

const WorkerContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [workerToken, setWorkerToken] = useState(
    localStorage.getItem("workerToken")
      ? localStorage.getItem("workerToken")
      : ""
  );
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState({
    earnings: 0,
    appointments: 0,
    users: 0,
    latestAppointments: [],
  });

  const [profileData, setProfileData] = useState(false)

  //API call to get appointments
  const getAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/worker/appointments",
        { headers: { Authorization: `Bearer ${workerToken}` } }
      );
      if (data.success) {
        setAppointments(data.appointments);
        console.log(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //API call to mark appointment completed
  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/worker/complete-appointment",
        { appointmentId },
        { headers: { Authorization: `Bearer ${workerToken}` } }
      );

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //API call to mark appointment cancelled
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/worker/cancel-appointment",
        { appointmentId },
        { headers: { Authorization: `Bearer ${workerToken}` } }
      );

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //API call to get dash Data
  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/worker/dashboard", {
        headers: { Authorization: `Bearer ${workerToken}` },
      });
      if (data.success) {
        setDashData(data.dashData);
        console.log(data.dashData);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //API call to fetch profile data
  const getProfileData = async () => {

    try {

        const {data} = await axios.get(backendUrl + '/api/worker/profile', {headers: { Authorization: `Bearer ${workerToken}` },})
        if(data.success) {
            setProfileData(data.profileData)
            console.log(data.profileData)
        }
        
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }

  }

  const value = {
    workerToken,
    setWorkerToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments,
    cancelAppointment,
    completeAppointment,
    getDashData,
    dashData,
    setDashData,
    profileData,
    setProfileData,
    getProfileData
  };

  return (
    <WorkerContext.Provider value={value}>
      {props.children}
    </WorkerContext.Provider>
  );
};

export default WorkerContextProvider;
