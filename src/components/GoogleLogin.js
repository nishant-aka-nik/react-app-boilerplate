import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../contexts/ProfileContext";  // Import the context

// Hardcoded credentials
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "BeF5.123";

function GoogleLoginComponent() {
  const navigate = useNavigate();
  const { setProfile } = useContext(ProfileContext);  // Access setProfile
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      // Create a mock profile for the admin user
      const profile = {
        names: [{ displayName: "Admin User" }],
        emailAddresses: [{ value: "admin@f5.com" }],
        photos: [{ url: "https://via.placeholder.com/100" }]
      };

      // Store login token
      localStorage.setItem("google_token", "admin_authenticated");
      localStorage.setItem("user_profile", JSON.stringify(profile));

      // Update profile in context
      setProfile(profile);

      navigate("/");  // Redirect after successful login
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="full-screen-parent">
      <div className="login-container">
        <h2>Welcome to Data Reconcile</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <div className="footer">
          &copy; 2025 F5. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default GoogleLoginComponent;