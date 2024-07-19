import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/episode-list.css';

const EpisodeList = () => {
  return (
    <div>
      <Navbar />
      <div className="accent-div"></div>
      <div className="container">
        <div className="row mb-3 text-center">
          <div className="col">
            <h1 className="fw-bold">Episode List</h1>
            <p className="lead text-muted">Discover all episodes of the Monster Mansion Podcast</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="/Website Assests/episode1.jpg" className="card-img-top" alt="Episode 1" />
              <div className="card-body">
                <h5 className="card-title">Episode 1: The Beginning</h5>
                <p className="card-text">An introduction to the world of Monster Mansion.</p>
                <a href="#" className="btn btn-primary">Listen Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="/Website Assests/episode2.jpg" className="card-img-top" alt="Episode 2" />
              <div className="card-body">
                <h5 className="card-title">Episode 2: The Mystery Deepens</h5>
                <p className="card-text">Exploring the secrets hidden within the mansion.</p>
                <a href="#" className="btn btn-primary">Listen Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="/Website Assests/episode3.jpg" className="card-img-top" alt="Episode 3" />
              <div className="card-body">
                <h5 className="card-title">Episode 3: A New Challenge</h5>
                <p className="card-text">The protagonists face unexpected obstacles.</p>
                <a href="#" className="btn btn-primary">Listen Now</a>
              </div>
            </div>
          </div>
        </div>
        {/* Add more episodes as needed */}
      </div>
    </div>
  );
};

export default EpisodeList;