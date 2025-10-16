// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopWorkers from "../components/TopWorkers";
import Banner from "../components/Banner";

const Home = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // animation duration (ms)
  //     once: true, // whether animation should happen only once
  //     offset: 100, // offset (in px) from the original trigger point
  //   });
  // }, []);

  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <Header />
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <SpecialityMenu />
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <TopWorkers />
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
