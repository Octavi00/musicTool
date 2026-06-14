import { Link } from "react-router-dom";
import "./App.css";




// Spotify API credentials
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://127.0.0.1:5173/ConnectSpotify/callback";

//Spotify API scopes for playlist and user data access
const SCOPES = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-private",
  "user-read-email"
]




// Function to initiate Spotify login and authorization page
function ConnectSpotify() {
  return (
    <div className="dashboard">
      <nav className="navigation">
        <Link className="logo" to="/">
            <button className="home-btn">Home</button>
        </Link>

        <div className="nav-links">
          <a>Transfer</a>
          <a>About</a>
        </div>
      </nav>

      <section className="connect-page">
        <div className="connect-card">
          <div className="spotify-icon">♬</div>

          <p className="connect-label">Step 1 of 2</p>

          <h1>Connect your Spotify account</h1>

          <p className="connect-description">
            Sign in with Spotify so Switchify can read your playlists and prepare
            them for transfer to Apple Music.
          </p>

          <button className="spotify-connect-btn" onClick={loginWithSpotify}>
            Continue with Spotify
          </button>

          <p className="connect-note">
            We only request playlist access needed for transferring your music.
          </p>
        </div>

        <div className="connect-preview">
          <h3>What happens next?</h3>

          <div className="step-row">
            <span>1</span>
            <p>Authorize Spotify access</p>
          </div>

          <div className="step-row">
            <span>2</span>
            <p>Select a playlist to transfer</p>
          </div>

          <div className="step-row">
            <span>3</span>
            <p>Match songs with Apple Music</p>
          </div>
        </div>
      </section>

      <div className="rectangle-2" />
    </div>
  );
}




// Function to handle Spotify login and redirect to authorization page
async function loginWithSpotify() {
  // Generate a code verifier and code challenge for PKCE authentication
  const codeVerifier = generateCodeVerifier(64);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  localStorage.setItem("spotify_code_verifier", codeVerifier);

  // Build the Spotify authorization URL with required parameters
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES.join(" "),
    code_challenge_method: "S256",
    code_challenge: codeChallenge
  });

  // Redirect the user to Spotify's authorization page
  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}




//Function to generate a code verifier for PKCE authentication
function generateCodeVerifier(length) {
  return generateRandomString(length);
}

// Function to generate a code challenge for PKCE authentication
async function generateCodeChallenge(codeVerifier) {
  // Create a SHA-256 hash of the code verifier and encode it in base64 URL format
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  // Convert the hash to a base64 URL-encoded string
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export default ConnectSpotify;