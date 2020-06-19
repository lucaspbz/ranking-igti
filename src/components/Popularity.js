import React from 'react';

const STARS = {
  empty: '☆',
  full: '★',
};
const maxStars = 10;

export default function Popularity({ value }) {
  const fullStars = STARS.full.repeat(value);
  const emptyStars = STARS.empty.repeat(maxStars - value);
  return (
    <div style={{ fontSize: '1.3rem', color: '#f39c12' }}>
      {fullStars}
      {emptyStars}
    </div>
  );
}
