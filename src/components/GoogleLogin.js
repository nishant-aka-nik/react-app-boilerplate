import React from "react";
import { useGoogleLogin } from "@react-oauth/google"; 
import { useNavigate } from "react-router-dom";

function GoogleLoginComponent() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    onSuccess: async (tokenResponse) => {
      try {
        console.log("🚀 ~ login success ~ tokenResponse:", tokenResponse);
        
        // Extract and store the access token
        const { access_token } = tokenResponse;
        console.log("🚀 ~ onSuccess: ~ access_token:", access_token);
        localStorage.setItem("google_token", access_token);

        // Use access token to fetch user profile details
        const profile = await fetchUserProfile(access_token);
        console.log("🚀 ~ User Profile:", profile);         

        // Optionally store profile details
        localStorage.setItem("user_profile", JSON.stringify(profile));

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
    <div className="login-container">
      <button onClick={() => login()}>Sign in with Google</button>
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