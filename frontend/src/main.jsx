
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  
    <AppContextProvider>
        <App />
        <ToastContainer />
    </AppContextProvider>
  
)
