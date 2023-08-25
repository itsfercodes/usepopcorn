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

function StarRating({
  maxRating = 5,
  color = '#fcc419',
  size = 48,
  className = '',
  messages = [],
  defaultRating = 0,
  onSetRating
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rate) {
    if (onSetRating) onSetRating(rate);
    setRating(rate);
  }

  const textStyle = {
    lineHeight: '1.2',
    margin: '0',
    color,
    fontSize: `${size / 1.5}px`
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            color={color}
            size={size}
            key={i}
            full={(tempRating || rating) >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ''}
      </p>
    </div>
  );
}
export default StarRating;
