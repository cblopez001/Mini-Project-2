import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/landing_page.css';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="accent-div"></div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="/Website Assests/Episode Update demo.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/Website Assests/Merch img demo.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/Website Assests/Subscribe img demo.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-accent-div"></div>
      {/* Add the rest of the HTML content from landing_page.html */}
    </div>
  );
};

export default LandingPage;
