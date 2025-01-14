import React, { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../contexts/ProfileContext";  // Import the context


function GoogleLoginComponent() {
  const navigate = useNavigate();
  const { setProfile } = useContext(ProfileContext);  // Access setProfile


  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    onSuccess: async (tokenResponse) => {
      try {
        // Extract and store the access token
        const { access_token } = tokenResponse;
        localStorage.setItem("google_token", access_token);

        // Use access token to fetch user profile details
        const profile = await fetchUserProfile(access_token);

        // Optionally store profile details
        localStorage.setItem("user_profile", JSON.stringify(profile));

        // Update profile in context
        setProfile(profile);

        navigate("/");  // Redirect after successful login  
      } catch (error) {
        console.error("Error handling access token:", error);
        alert("An unexpected error occurred while processing your login. Please try again.");
      }
    },
    onError: (error) => {
      console.log("Login failed:", error);
      alert("Login failed! Please try again.");
    },
  });

  return (
    <div className="full-screen-parent">
      <div className="login-container">
        <h2>Welcome to Plutus</h2>
        <p>Your Budget Helper</p>
        <button
          onClick={() => login()}
          className="login-button"
        >
          <i className="fab fa-google" /> Log in with Google
        </button>
        <div className="footer">
          &copy; 2025 Plutus. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default GoogleLoginComponent;



async function fetchUserProfile(accessToken) {
  const response = await fetch(
    "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  const profileData = await response.json();
  return profileData;
}