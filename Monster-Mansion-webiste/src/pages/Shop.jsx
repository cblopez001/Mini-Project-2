import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/shop.css';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="accent-div"></div>
      <div className="container">
        <div className="row mb-3 text-center">
          <div className="col">
            <h1 className="fw-bold">Shop</h1>
            <p className="lead text-muted">Browse and purchase your favorite Monster Mansion merchandise</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="/Website Assests/item1.jpg" className="card-img-top" alt="Item 1" />
              <div className="card-body">
                <h5 className="card-title">T-shirt</h5>
                <p className="card-text">$20.00</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="/Website Assests/item2.jpg" className="card-img-top" alt="Item 2" />
              <div className="card-body">
                <h5 className="card-title">Mug</h5>
                <p className="card-text">$10.00</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="/Website Assests/item3.jpg" className="card-img-top" alt="Item 3" />
              <div className="card-body">
                <h5 className="card-title">Hat</h5>
                <p className="card-text">$15.00</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Shop;
