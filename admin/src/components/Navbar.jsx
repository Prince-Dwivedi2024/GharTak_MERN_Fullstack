import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {

   const {adminToken, setAdminToken} = useContext(AdminContext)

   const navigate = useNavigate()

   const logout = () => {
    navigate('/')
    adminToken && setAdminToken('')
    adminToken && localStorage.removeItem('adminToken')
   }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        {/* ---------Logo-------- */}
        <Link to={'/'}>
        <div className="text-center w-36 sm:w-40 cursor-pointer">
          {/* <!-- Main logo text --> */}
          <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-wide hover:text-orange-400">
            GharTak
          </h1>
          {/* <!-- Subtext --> */}
          <p className="text-xs md:text-xs text-gray-600 mt-1 tracking-wider">
            Dashboard Panel
          </p>
        </div>
        </Link>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">{adminToken ? 'Admin' : 'Worker'}</p>
      </div>
      <button onClick={logout} className="bg-primary text-white text-sm px-10 py-2 rounded-full">Logout</button>
    </div>
  );
};

export default Navbar;
