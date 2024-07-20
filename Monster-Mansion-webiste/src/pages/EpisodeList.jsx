import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/EpisodeList.css'; // Make sure to create this CSS file

// Import Images and Audio
import littleShopImg from '../assets/images/littleShopImg.jpg';
import arachnaphobiaImg from '../assets/images/arachnaphobiaImg.jpg'
import draculaImg from '../assets/images/draculaImg.jpg'
import audioDemo from '../assets/images/audioDemo.wav'; // Correct the path if necessary

const episodes = [
  {
    title: 'Little Shop of Horrors',
    imgSrc: littleShopImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Movies',
  },
  // Repeat for other episodes with respective data and categories
  {title: 'Arachnaphobia',
  imgSrc: arachnaphobiaImg,
  audioSrc: audioDemo,
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  category: 'Movies',
},
{title: 'Dracula',
  imgSrc: draculaImg,
  audioSrc: audioDemo,
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
  category: 'Books',}
];

const EpisodeList = () => {
  const [filter, setFilter] = useState('All');

  const filteredEpisodes = filter === 'All' ? episodes : episodes.filter(episode => episode.category === filter);

  return (
    <div>

      <div className="accent-div"></div>

      <div className="filter-container">
        <ul className="filter-wrapper">
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('All')}>All</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Movies')}>Movies</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Games')}>Games</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Books')}>Books</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Comics')}>Comics</a>
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
          {filteredEpisodes.map((episode, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <a href="#">
                  <img src={episode.imgSrc} className="card-img-top" alt="Episode Thumbnail" style={{ width: '100%', height: '800px' }} />
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
