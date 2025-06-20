import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [workers, setWorkers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userData, setUserData] = useState(false)


  // API call to fetch worker data
  const getWorkersData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/worker/list');
      if (data.success) {
        setWorkers(data.workers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //function to fetch user data from API
  const loadUserProfileData = async () => {

    try {

      const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers: {Authorization: `Bearer ${token}`,},} )
      if(data.success){
        setUserData(data.userData)
      } else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  useEffect(() => {
    getWorkersData();
  }, []);

  useEffect(() => {
    if(token){
      loadUserProfileData()
    } else{
      setUserData(null)
    }
  }, [token]);

  const value = {
    workers,
    currencySymbol,
    getWorkersData,
    token, setToken,
    backendUrl,
    userData, setUserData, loadUserProfileData
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
