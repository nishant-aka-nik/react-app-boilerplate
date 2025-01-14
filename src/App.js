// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/joy/styles";
import theme from "./theme";
import Contacts from "./components/Contacts";
import Search from "./components/Search";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import GoogleLoginComponent from "./components/GoogleLogin"; // Import GoogleLogin component
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute component
import Overview from "./components/Overview";
import { ProfileProvider } from "./contexts/ProfileContext"; // Import ProfileProvider

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProfileProvider>
        <Routes>
          <Route path="/login" element={<GoogleLoginComponent />} /> {/* Google Login route */}

          {/* Parent route with Home as layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            {/* Nested routes inside Home */}
            <Route index element={<Overview />} />  {/* Render Overview at exact "/" */}
            <Route
              path="contacts"
              element={
                <Contacts />
              }
            />
            <Route
              path="search"
              element={
                <Search />
              }
            />
            <Route
              path="myprofile"
              element={
                <MyProfile />
              }
            />
            {/* Add additional nested routes as needed */}
          </Route>
        </Routes>
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;