
import { createRoot } from 'react-dom/client'
import App from './App'
import AppContextProvider from './context/AppContext'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './index.css'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </AppContextProvider> 
)

