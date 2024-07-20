import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/styles/landingPage.css';  // Import your main CSS file here
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
