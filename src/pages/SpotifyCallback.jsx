// A simple React component to handle the Spotify callback and extract the authorization code from the URL
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function SpotifyCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Log the authorization code for debugging purposes
      console.log("Spotify authorization code:", code);

      // Store the authorization code in localStorage for later use
      localStorage.setItem("spotify_connected", "true");

      // Redirect to ToolsPage after a short delay to show the success message
      setTimeout(() => {
        navigate("/ToolsPage");
        }, 2000);
    }
    
}, [navigate]);

  return (
    <div className="dashboard">
      <h1>Spotify connected</h1>
      <p>Redirecting to Tools...</p>
    </div>
  );
}

export default SpotifyCallback;