import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const currencySymbol = "$";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AppContextProvider = (props) => {
  const [workers, setWorkers] = useState([]);

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

  useEffect(() => {
    getWorkersData();
  }, []);

  const value = {
    workers,
    currencySymbol,
    getWorkersData,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
