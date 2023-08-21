import React from 'react';
import ReactDOM from 'react-dom/client';
import PopcornApp from './PopcornApp';
import './index.css';
import StarRating from './components/StarRating';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PopcornApp /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Master Piece']}
      defaultRating={5}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
  </React.StrictMode>
);
