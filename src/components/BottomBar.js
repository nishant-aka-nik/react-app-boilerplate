import { Typography } from "@mui/joy";
import React from "react";
import { NavLink } from "react-router-dom";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WeekendIcon from '@mui/icons-material/Weekend';
import SavingsIcon from '@mui/icons-material/Savings';

const bottomElementTheme = { display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }

const BottomBar = () => {
    return (
        <div className="bottom-bar">
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <Typography color="white" sx={bottomElementTheme}>
                    <CreditCardIcon />
                    Cards
                </Typography>
            </NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <Typography color="white" sx={bottomElementTheme}>
                    <WeekendIcon />
                    Home
                </Typography>
            </NavLink>
            <NavLink to="/myprofile" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <Typography color="white" sx={bottomElementTheme}>
                    <SavingsIcon />
                    Savings
                </Typography>
            </NavLink>
        </div>
    );
};

export default BottomBar;