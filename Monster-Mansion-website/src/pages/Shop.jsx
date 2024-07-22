import React, { useState, useEffect } from 'react';
import '../assets/styles/shop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import Footer from '../components/Footer'; // Import the Footer component

/* Import images */
import mugImg from '../assets/images/shopImages/mugImg.png';
import hoodieImg from '../assets/images/shopImages/hoodieImg.png';

// Product Data
const products = [
  {
    title: 'Monster Mash Mug',
    price: '$10.00',
    imgSrc: mugImg,
    description: 'Description for product 1'
  },
  {
    title: 'Monster Mansion Hoodie',
    price: '$20.00',
    imgSrc: hoodieImg,
    description: 'Description for product 2'
  },
];

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    updateCartTotal();
  }, [cartItems]);

  const addToCartClicked = (product) => {
    const existingItem = cartItems.find(item => item.title === product.title);
    if (existingItem) {
      alert('This item is already added to the cart');
      return;
    }
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeCartItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const quantityChanged = (index, quantity) => {
    const updatedCart = cartItems.map((item, i) => (
      i === index ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
    setCartItems(updatedCart);
  };

  const updateCartTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
    setCartTotal(total.toFixed(2));
  };

  const purchaseClicked = () => {
    alert('Thank you for your purchase');
    setCartItems([]);
  };

  return (
    <div>
      {/* Navbar */}
      <nav id="navbar" className="navbar navbar-expand-lg bg-dark navbar-dark">
        {/* Navbar content */}
      </nav>

      <div className="accent-div"></div>

      {/* Header Section */}
      <div className="title-container">
        <div className="page-title">
          <h2 className="title">Monster Merch Shop</h2>
        </div>
      </div>

      {/* Merch Section */}
      <section className="merch-sec">
        <div className="merch-container">
          <div className="row row-cols-1 row-cols-md-2 g-5">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ width: '20rem' }}>
                  <div className="card-body">
                    <img className="card-img" src={product.imgSrc} alt={product.title} />
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{product.price}</h6>
                    <p className="card-text">{product.description}</p>
                    <button className="cart-btn" onClick={() => addToCartClicked(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="cart-sec">
        <div className="header-container">
          <div className="page-title">
            <h2 className="title">Checkout Cart</h2>
          </div>
        </div>

        <div className="content-row">
          <span className="cart-item cart-header cart-column">Item</span>
          <span className="cart-price cart-header cart-column">Price</span>
          <span className="cart-quantity cart-header cart-column">Quantity</span>
        </div>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-row" key={index}>
              <div className="cart-item cart-column">
                <img src={item.imgSrc} width="100" height="100" className="cart-item-img" alt={item.title} />
                <span className="cart-item-title">{item.title}</span>
              </div>
              <span className="cart-price cart-column">{item.price}</span>
              <div className="cart-quantity cart-column">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => quantityChanged(index, parseInt(e.target.value))}
                  className="quantity-input"
                />
                <button role="button" className="btn btn-danger quantity-btn" onClick={() => removeCartItem(index)}>REMOVE</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="checkout-end">
        <div className="cart-total">
          <strong className="cart-total-title">TOTAL :</strong>
          <span className="cart-total-price">${cartTotal}</span>
        </div>
      </section>

      <button role="button" className="btn btn-purchase" onClick={purchaseClicked}>PURCHASE</button>

      <div className="accent-div"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
