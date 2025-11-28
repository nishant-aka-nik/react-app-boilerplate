import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProfileContext } from "../contexts/ProfileContext";
import Avatar from '@mui/joy/Avatar';


const Navbar = () => {

  const { profile } = useContext(ProfileContext);
  console.log("🚀 ~ Navbar ~ profile:", profile)
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOf0rYYMvVqiD6XW7crOU4qcPO9QijJigqA&s";
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