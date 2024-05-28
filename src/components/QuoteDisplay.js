import React from 'react';
import '../styles/main.css';

function QuoteDisplay({ quote }) {
  return (
    <div className="quote-display">
      <p>{quote}</p>
    </div>
  );
}

export default QuoteDisplay;
