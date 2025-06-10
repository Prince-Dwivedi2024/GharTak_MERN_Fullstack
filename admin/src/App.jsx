import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext'

// Move router creation inside a component
const App = () => {
  const { adminToken } = useContext(AdminContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: adminToken ? <div></div> : <Login />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
