import React, { useState } from 'react';
import MoodInputForm from './components/MoodInputForm';
import QuoteDisplay from './components/QuoteDisplay';
import { fetchQuote } from './services/OpenAIService';
import './styles/main.css';

function App() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSelectMood = async (mood) => {
    setLoading(true);
    setError('');
    try {
      const fetchedQuote = await fetchQuote(mood);
      setQuote(fetchedQuote);
    } catch (err) {
      setError('Failed to fetch quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div>
        <h1>Good Day!</h1>
        <QuoteDisplay quote={quote} />
        <h2>How are you?</h2>
        <MoodInputForm onSelectMood={handleSelectMood} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default App;
