import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";

import ConnectSpotify from "./pages/ConnectSpotify.jsx";
import SpotifyCallback from "./pages/SpotifyCallback.jsx";

import ToolsPage from "./pages/ToolsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ConnectSpotify" element={<ConnectSpotify />} />
      <Route path="/ConnectSpotify/callback" element={<SpotifyCallback />} />
      <Route path="/ToolsPage" element={<ToolsPage />} />
    </Routes>
  );
}

export default App;