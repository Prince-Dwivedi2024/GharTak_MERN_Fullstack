import React, { useContext } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import Appointments from './pages/Admin/Appointments';
import AddWorker from './pages/Admin/AddWorker';
import WorkersList from './pages/Admin/WorkersList';


const App = () => {
  const { adminToken } = useContext(AdminContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: adminToken ? 
      <div>
      <div className='bg-[#F8F9FD]'><Navbar /></div>
      <div className='flex items-start'>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
      : <Login />,

      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },

        {
          path: '/appointments',
          element: <Appointments/>
        },

        {
          path: '/addWorker',
          element: <AddWorker />
        },

        {
          path: '/workersList',
          element: <WorkersList />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
