import React from 'react';
import ReactDOM from 'react-dom/client';
import PopcornApp from './PopcornApp';
import './index.css';
import StarRating from './components/StarRating';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopcornApp />
  </React.StrictMode>
);
