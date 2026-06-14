import { Link } from "react-router-dom";
import "./App.css";

function ToolsPage() {
  return (
    <div className="dashboard">
      <h1>Playlist Tools</h1>

      <nav className="navigation">
        <Link className="logo" to="/">
            <button className="home-btn">Home</button>
        </Link>

        <div className="nav-links">
          <a>Transfer</a>
          <a>About</a>
        </div>
      </nav>

      <section className="connect-card">
        <h2>Playlist Merger</h2>
        <p>Select multiple playlists and combine them into one new playlist.</p>

        <button className="merge-btn">
          Start Merging
        </button>
      </section>
    </div>
  );
}

export default ToolsPage;