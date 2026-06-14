import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";

import ConnectSpotify from "./pages/ConnectSpotify.jsx";
import SpotifyCallback from "./pages/SpotifyCallback.jsx";

import ConnectApple from "./pages/ConnectApple.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ConnectSpotify" element={<ConnectSpotify />} />
      <Route path="/ConnectApple" element={<ConnectApple />} />
      <Route path="/ConnectSpotify/callback" element={<SpotifyCallback />} />
    </Routes>
  );
}

export default App;