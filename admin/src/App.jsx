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
import { WorkerContext } from './context/WorkerContext';
import WorkerDashboard from './pages/Worker/WorkerDashboard';
import WorkerProfile from './pages/Worker/WorkerProfile';
import WorkerAppointments from './pages/Worker/WorkerAppointments';


const App = () => {
  const { adminToken } = useContext(AdminContext);
  const {workerToken} = useContext(WorkerContext)

  const router = createBrowserRouter([
    {
      path: "/",
      element: adminToken || workerToken ? 
      <div>
      <div className='bg-[#F8F9FD]'><Navbar /></div>
      <div className='flex items-start'>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
      : <Login />,

      children: [
        //admin sidebar routes
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
        },

        //worker sidebar routes
        {
          path: '/worker-dashboard',
          element: <WorkerDashboard />
        },

        {
          path: '/worker-appointments',
          element: <WorkerAppointments />
        },

        {
          path: '/worker-profile',
          element: <WorkerProfile />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
