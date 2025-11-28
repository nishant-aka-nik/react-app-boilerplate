import { Typography } from "@mui/joy";
import React from "react";
import { NavLink } from "react-router-dom";
import WeekendIcon from '@mui/icons-material/Weekend';

const bottomElementTheme = { display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }

const BottomBar = () => {
    return (
        <div className="bottom-bar">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <Typography color="white" sx={bottomElementTheme}>
                    <WeekendIcon />
                    Home
                </Typography>
            </NavLink>
        </div>
    );
};

export default BottomBar;