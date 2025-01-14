import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/joy";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
        <Typography color="white" fontSize='30px'>
          <AccountCircleIcon />
        </Typography>
      </NavLink>
    </div>
  );
};

export default Navbar;