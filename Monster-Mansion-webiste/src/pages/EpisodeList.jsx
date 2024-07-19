import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/EpisodeList.css'; // Make sure to create this CSS file

const episodes = [
  {
    title: 'Little Shop of Horrors',
    imgSrc: '/Website Assests/ep img 1.jpg',
    audioSrc: '/Website Assests/Cherlopez Theme Final.wav',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  },
  // Repeat for other episodes with respective data
];

const EpisodeList = () => {
  return (
    <div>
      <Navbar />
      <div className="accent-div"></div>
      <div className="title-container">
        <div className="page-title">
          <h2 className="title">Episode Library</h2>
        </div>
      </div>

      <div className="filter-container">
        <ul className="filter-wrapper">
          <li className="filter-item">
            <a href="#" className="filter-link">All</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link">Movies</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link">Games</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link">Books</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link">Comics</a>
          </li>
        </ul>

        <div className="search">
          <form action="#">
            <input type="search" className="form-control" placeholder="Search" />
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="library-container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {episodes.map((episode, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <a href="#">
                  <img src={episode.imgSrc} className="card-img-top" alt="..." style={{ width: '100%', height: '800px' }} />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{episode.title}</h5>
                  <p className="card-text">{episode.description}</p>
                  <audio src={episode.audioSrc} controls>Listen to episode</audio>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="accent-div"></div>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <a href="/landing_page.html">Home</a>
            <a href="#">Episodes</a>
            <a href="/shop.html">Shop</a>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="footer-copyright">
            <p>Copyright &copy; 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EpisodeList;
