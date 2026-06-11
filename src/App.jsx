import './App.css'
function App() {

  return (
    <div className="dashboard">
      <nav className="navigation">
        <div className="logo">Switchify</div>
        <div className="nav-links">
          <a>Home</a>
          <a>Transfer</a>
          <a>About</a>
        </div>
      </nav>

      <section className="hero-card">
        <p className="text-wrapper">Welcome to your favorite tools</p>

        <p className="div">
          Switching music service? Try out the playlist transfer tool
        </p>

        <div className="button-row">
          <button className="spotify-btn">Connect Spotify</button>
          <button className="apple-btn">Connect Apple Music</button>
        </div>
      </section>

      <div className="rectangle">
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

      <div className="rectangle-2" />
    </div>
  )
}

export default App
