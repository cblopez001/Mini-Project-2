import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/Shop';  // Import your ShopPage component
import EpisodeList from './components/EpisodeList';  // Import your EpisodeList component
import './shop.css';  // Ensure CSS is imported

const App = () => {
  return (
    <Router>
      <div>
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/episodes" element={<EpisodeList />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

