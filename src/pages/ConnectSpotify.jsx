import { Link } from "react-router-dom";
import "./App.css";

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

          <button className="spotify-connect-btn">
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

export default ConnectSpotify;