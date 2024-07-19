import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EpisodeList from './pages/EpisodeList';
import Shop from './pages/Shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/episodes" element={<EpisodeList />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
