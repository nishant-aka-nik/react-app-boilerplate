// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/joy/styles";
import theme from "./theme";
import Search from "./components/Search";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import GoogleLoginComponent from "./components/GoogleLogin"; // Import GoogleLogin component
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute component
import HomePage from "./components/HomePage"; // Import HomePage component
import ObjectDetails from "./components/ObjectDetails"; // Import ObjectDetails component
import Services from "./components/Services"; // Import Services component
import DiffViewer from "./components/DiffViewer"; // Import DiffViewer component
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
            <Route index element={<HomePage />} />  {/* Render HomePage at exact "/" */}
            <Route
              path="objects/:objectType"
              element={
                <ObjectDetails />
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
            <Route
              path="services/:uid"
              element={
                <Services />
              }
            />
            <Route
              path="diff-viewer"
              element={
                <DiffViewer />
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