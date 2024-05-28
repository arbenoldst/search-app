import React from 'react';
import '../styles/main.css';

const moods = ['Happy', 'Sad', 'Excited', 'Angry'];

function MoodInputForm({ onSelectMood }) {
  const handleButtonClick = (mood) => {
    onSelectMood(mood);
  };

  return (
    <div className="mood-buttons">
      {moods.map((mood) => (
        <button key={mood} onClick={() => handleButtonClick(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
}

export default MoodInputForm;
