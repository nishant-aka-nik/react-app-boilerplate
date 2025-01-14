import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProfileContext } from "../contexts/ProfileContext";
import Avatar from '@mui/joy/Avatar';


const Navbar = () => {

  const { profile } = useContext(ProfileContext);
  console.log("🚀 ~ Navbar ~ profile:", profile)
  const imageUrl = profile?.photos?.[0]?.url || "https://via.placeholder.com/100";
  console.log("🚀 ~ Navbar ~ imageUrl:", imageUrl)


  return (
    <div className="navbar">
      <NavLink to="/myprofile" className={({ isActive }) => (isActive ? "active" : undefined)}>
        <Avatar src={imageUrl}/>
      </NavLink>
    </div>
  );
};

export default Navbar;