// imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// styles
import './index.css';
// components
import App from './App';
// performancw
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
