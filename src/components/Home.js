import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import Overview from "./Overview";  // Import the Overview component

const Home = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div>Debug: Home is rendering.</div>

      {location.pathname === "/" ? <Overview /> : <Outlet />}
      <BottomBar />
    </>
  );
};

export default Home;