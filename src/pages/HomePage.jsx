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
        <p className="text-wrapper">Welcome to your favorite tools</p>

        <p className="hero-subtext">
          Switching music service? Try out the playlist transfer tool
        </p>

        <div className="button-row">
          <Link to="/ConnectSpotify">
            <button className="spotify-btn">Connect Spotify</button>
          </Link>

          <Link to="/ConnectApple">
            <button className="apple-btn">Connect Apple Music</button>
          </Link>
        </div>
      </section>

      <div className="transfer-preview">
        <div className="playlist-card spotify-card">
          <span>Spotify Playlist</span>
          <p>Liked Songs → Road Trip → Gym Mix</p>
        </div>

        <div className="arrow">⇄</div>

        <div className="playlist-card apple-card">
          <span>Apple Music</span>
          <p>Matched songs ready to transfer</p>
        </div>
      </div>

      <div className="background-glow" />
    </div>
  )
}

export default App
