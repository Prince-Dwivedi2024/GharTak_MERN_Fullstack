import React from "react";
import { Link } from "react-router-dom";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-ora">
        {/* -----left section------ */}
        <div>

          <div className="font-bona font-semibold text-primary w-44 mb-4 cursor-pointer text-4xl">
            <Link to="/" className="hover:text-orange-600">
              <div className="flex justify-between items-center gap-2">
                <SiHomeassistantcommunitystore />
                <div className="text-orange-900">GharTak</div>
              </div>
            </Link>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Ghar Tak brings trusted electricians, plumbers, and other experts to your doorstep. Our trained professionals wear uniforms and deliver quick, reliable service. Simple booking, safe help—home services made easy, anytime you need.</p>

        </div>
        {/* -----center section------ */}
        <div>
            <p className="text-xl font-medium mb-5">
                COMPANY
            </p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>
                    <Link to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={()=> scrollTo(0,0)}>
                    About us
                    </Link>
                </li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* -----right section------ */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+0-000-000-000</li>
                <li>support@ghartakservices.com</li>
            </ul>
        </div>
      </div>
      {/* --------copyright text------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center font-medium">Copyright 2025 @ GharTak.services - All Right Reserved.</p>
        <p className="py-5 text-sm text-center from-neutral-900">Devloped with love by <a href="https://github.com/Prince-Dwivedi2024" className="text-teal-950 dark:text-teal-600">Prince Dwivedi</a></p>
      </div>
    </div>
  );
};

export default Footer;
