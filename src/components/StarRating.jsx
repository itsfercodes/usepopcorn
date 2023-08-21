import { useState } from 'react';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItem: 'center',
  gap: '16px'
};

const starContainerStyle = {
  display: 'flex'
};

const textStyle = {
  lineHeight: '1',
  margin: '0'
};

function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rate) {
    setRating(rate);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={(tempRating || rating) >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
}
export default StarRating;
