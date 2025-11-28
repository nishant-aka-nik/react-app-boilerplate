import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomBar />
    </>
  );
};

export default Home;