import './App.css'
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="dashboard">
      <nav className="navigation">
        <div className="logo">Octavi00</div>
        <div className="nav-links">
          <a>Transfer</a>
          <a>About</a>
        </div>
      </nav>

      <section className="hero-card">
        <p className="text-wrapper">Welcome to your favorite Playlist tools</p>

        <p className="hero-subtext">
          Can't decide which playlist to listen to? Try out the playlist merging tool
        </p>

        <div className="button-row">
          <Link to="/ConnectSpotify">
            <button className="spotify-btn">Connect Spotify</button>
          </Link>
        </div>
      </section>

      <div className="tool-preview">
        <div className="playlist-card spotify-card">
          <span>Playlist Merger</span>
          <p>Road Trip + Gym Mix → Flow State</p>
        </div>

        <div className="arrow">+</div>
      </div>

      <div className="background-glow" />
    </div>
  )
}

export default App
