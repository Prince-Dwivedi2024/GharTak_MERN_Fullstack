import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import WorkerContextProvider from './context/WorkerContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  
    <AdminContextProvider>
        <WorkerContextProvider>
        <AppContextProvider>
            <App/>
             <ToastContainer />
        </AppContextProvider>
        </WorkerContextProvider>
    </AdminContextProvider>
)
