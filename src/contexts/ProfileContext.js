// src/contexts/ProfileContext.js
import React, { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  // Initialize from localStorage if available
  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem("user_profile");
    return storedProfile ? JSON.parse(storedProfile) : null;
  });

  // Optional: Sync any profile changes back to localStorage
  useEffect(() => {
    if (profile) {
      localStorage.setItem("user_profile", JSON.stringify(profile));
    } else {
      localStorage.removeItem("user_profile");
    }
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};  