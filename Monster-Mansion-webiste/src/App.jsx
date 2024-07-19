import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EpisodeList from './pages/EpisodeList';
import Shop from './pages/Shop';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/episodes" component={EpisodeList} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
};

export default App;
