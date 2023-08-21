import { useState } from 'react';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItem: 'center',
  gap: '16px'
};

const starContainerStyle = {
  display: 'flex',
  gap: '4px'
};

const textStyle = {
  lineHeight: '1',
  margin: '0'
};

function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);

  function handleRating(rate) {
    setRating(rate);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{rating || ''}</p>
    </div>
  );
}
export default StarRating;
